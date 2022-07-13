// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createServer } from '@graphql-yoga/node'
import { Prisma } from '@prisma/client'
import ObjectID from 'bson-objectid'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resolvers } from '../../resolvers-types'
import { Context, createContext } from './../../graphql/context'

const { loadFilesSync } = require('@graphql-tools/load-files')

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

const resolvers: Resolvers = {
  Query: {
    agencies: (parent, args, context: Context) => 
      context.prisma.agency.findMany(),
    agency: (parent, args, context: Context) => 
      context.prisma.agency.findUnique({ where: { id: args.id }}),

    // elections: (parent, args, context: Context) => 
    //   context.prisma.election.findMany(),
    elections: async (parent, args, context: Context) => {
      console.log({ args })

      let agencyId = undefined;
      
      if (args.filters) {
        const agencyArg = args.filters?.agencyId;
        if (agencyArg) {
          if (!ObjectID.isValid(agencyArg)) return [];
        } else {
          agencyId = agencyArg;
        }
      } 

      const result = await context.prisma.election.findMany({
        where: { agencyId: agencyId }
      });
      return result;

      // const result = await context.prisma.agency.findUnique({
      //   where: {
      //     id: agencyId,
      //   },
      //   include: {
      //     elections: true,
      //   }
      // });
      // return result ? result.elections : [];
    },
    election: (parent, args, context: Context) => 
      context.prisma.election.findUnique({ where: { id: args.id }}),
  },
  Mutation: {
    createAgency: async (parent, args, context: Context) => {
      const { name, software, urlToken } = args.input;
      const agency = { name, software, urlToken };

      // return await context.prisma.agency.create({
      //   data: agency,
      // });
      // AgencyCreateInput

      const result = await context.prisma.agency.upsert({
        where: {
          software_urlToken: {
            software: software,
            urlToken: urlToken,
          }
        },
        update: agency,
        create: agency,
      });

      return result;
    },
    createAgencies: async (parent, args, context: Context) => {
      const software = args.input.software;
      const agencies = 
        args.input.agencyItems
          .map((agency) => ({
            ...agency,
            software: software,
          }));

      const responses = [];

      for await (const agency of agencies) {
        const agencyCreate = {
          data: agency,
        };

        responses.push (await context.prisma.agency.create({
          data: agency,
        }));
      }

      return responses;
    },
    deleteAgency: async (parent, args, context: Context) => {
      const deleteAgency: Prisma.AgencyDeleteArgs = {
        where: {
          id: args.id
        }
      };

      const result = await context.prisma.agency.delete(deleteAgency);

      return result;
    },

    createElection: async (parent, args, context: Context) => {

      const { agencyId, date, type } = args.input;
      const election = { date, type };

      return await context.prisma.agency.update({
        where: {
          id: agencyId
        },
        data: {
          elections: {
            create: {
              ...election,
            }
          }
        }
      });
    },
    createCandidate: async (parent, args, context: Context) => {
      const { electionId, name, lastName, firstName, office } = args.input;
      const candidate = { electionId, name, lastName, firstName, office };

      console.log({ candidate });
      return candidate;
    },
  },
  Agency: {
    elections: async (parent, args, context: Context, ) => {
      const agencyId = parent.id;

      if (!agencyId) return [];

      const result = await context.prisma.election.findMany({
        where: { agencyId: agencyId }
      });

      return result;
    },
  },
  // Election: {
  //   // date: (parent, args, context: Context) => {
  //   //   console.log({ parent })
  //   //   // console.log({ args })
  //   //   return parent.date;
  //   // }
  // },
};

 export default createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: {
    typeDefs: loadFilesSync('schema/**/*.graphql'),
    resolvers,
  },
  context: createContext,
})