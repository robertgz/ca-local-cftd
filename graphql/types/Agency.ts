import { objectType, extendType, nonNull, stringArg, nullable, inputObjectType, intArg } from 'nexus'
import { Prisma, PrismaPromise } from '@prisma/client'


export const Agency = objectType({
  name: 'Agency',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('software')
    t.string('url')
  },
});

export const AgenciesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('agencies', {
      type: 'Agency',
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.agency.findMany()
      }
    })
  }
});

export const AgencyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('agency', {
      
      type: 'Agency',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_parent, _args, ctx) => {
        // console.log(_args)

        return ctx.prisma.agency.findUnique({
          where: {
            id: _args.id,
          },
        })
      }
    })
  }
});


export const AgencyItemInputType = inputObjectType({
  name: 'AgencyItemInputType',
  definition(t) {
    t.nonNull.string('name')
  }
})

export const AgencyInputType = inputObjectType({
  name: 'AgencyInputType',
  definition(t) {
    t.string('software'),
    t.nonNull.list.nonNull.field('agencyItems', {
      type: 'AgencyItemInputType',
    })
  }
})


export const CreateAgenciesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createAgencies', {
      type: 'Agency',
      args: {
        input: AgencyInputType,
      },
      async resolve(_parent, _args, ctx) {
        // console.log(_args)
        // console.log(_args.input)
        // console.log(_args.software)

        if (!_args?.input?.agencyItems) return [];
       
        const software = _args.input.software;
        // const inputAgencies = _args.input.agencyItems.filter((agency) => agency?.name !== null);

        const newAgencies = _args.input.agencyItems
          .map((agency) => ({
            ...agency,
            software: software,
          }));
        

        const agencyCreate: Prisma.AgencyCreateManyArgs = {
          data: newAgencies,
        }
        
        // console.log(newAgencies)

        const responses: any = [];

        for await (const agency of newAgencies) {
          responses.push (await ctx.prisma.agency.create({
            data: agency
          }));
        }
        
        // console.log(responses)

        return responses;
      }
    })
  }
});

export const CreateAgencyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createAgency', {
      type: 'Agency',
      args: {
        name: nonNull(stringArg()),
        software: nullable(stringArg()),
      },
      async resolve(_parent, _args, ctx) {
        
        const newAgency: Prisma.AgencyCreateInput = {
          name: _args.name,
          software: _args.software,
        }
        
        return await ctx.prisma.agency.create({
          data: newAgency,
        });
      }
    })
  }
});

// export const DeleteAgencyMutation = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.nonNull.field('deleteAgency', {
//       type: 'Agency',
//       args: {
//         id: nonNull(stringArg()),
//       },
//       async resolve(_parent, _args, ctx) {
        
//         const deleteAgency: Prisma.AgencyDeleteArgs = {
//           where: {
//             id: _args.id
//           }
//         }
        
//         return await ctx.prisma.agency.delete(deleteAgency);
//       }
//     })
//   }
// });
