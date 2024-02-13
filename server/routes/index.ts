import { IRouter } from '../../../../src/core/server';
import { schema } from '@osd/config-schema';

const { Client } = require("@opensearch-project/opensearch");

var host = "localhost";
var protocol = "http";
var port = 9200;
var auth = "admin:admin"; // For testing only. Don't store credentials in code.

var client = new Client({
  node: protocol + "://" + auth + "@" + host + ":" + port,
});

export function defineRoutes(router: IRouter) {
  router.get(
    {
      path: '/api/ubl_dashboard/ubl_logs',
      validate: false
    },
    async (context, request, response) => {

      const indices = await client.cat.indices({format: 'json'})
      let results = [];
      
      /**/ 
      for (const idx of indices['body']){
        const name = idx['index'];
        const count = idx['docs.count'];
        results.push({log_name:name, count:count});
        
        
      }

      return response.ok({
        body: {
          indices: results,
        },
      });
    }
  );
  router.get(
    {
      path: '/api/ubl_dashboard/get_log',
      validate: {
        query: schema.object({
          log_name: schema.string({ defaultValue: 'ubl_log' }),
          count: schema.number({defaultValue: 10})
        }),
      },
    },
    async (context, request, response) => {
      const rs = await client.search({ 
        index: request.query.log_name, 
        q: "*:*",
        size: request.query.count, 
        format: 'json'
      })

      let results = [];
      
      /**/ 
      for (const doc of rs['body']['hits']['hits']){
        results.push(JSON.stringify(doc))
      }
      
      /**/ 
      return response.ok({
        body: {
          logs: results,
        },
      });
    }
  );
}
