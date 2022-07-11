import { objectType, extendType, nonNull, stringArg, nullable } from 'nexus'
import { Prisma } from '@prisma/client'

export const Election = objectType({
  name: 'Election',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('electionDate')
    // t.string('year')
    t.string('type')
  },
});

export const ElectionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('elections', {
      type: 'Election',
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.election.findMany()
      }
    })
  }
});


export const CreateElectionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createElection', {
      type: 'Election',
      args: {
        name: nonNull(stringArg()),
        date: nullable(stringArg()),
        type: nullable(stringArg()),
      },
      async resolve(_parent, _args, ctx) {
        
        const newElection: Prisma.ElectionCreateInput = {
          name: _args.name,
          electionDate: _args.date,
          type: _args.type,
        }
        
        return await ctx.prisma.election.create({
          data: newElection,
        });
      }
    })
  }
});
