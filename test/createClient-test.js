require('mocha');
/**
 * Modules dependencies
 */
const assert = require('chai').assert,
  libPath = process.env['SOLR_CLIENT_COV'] ? '../lib-cov' : '../lib',
  solr = require(libPath + '/solr');

// Test suite

describe('solr', function () {
  describe('.createClient()', function () {
    it('should return a `Client` instance', function () {
      const client = solr.createClient();
      assert.equal(client.options.host, '127.0.0.1');
      assert.equal(client.options.port, 8983);
      assert.equal(client.options.core, '');
      assert.equal(client.options.path, '/solr');
    });
  });
  describe('.createClient({ host : "10.10.10.10",port : 8080, core : "core1", path : "/solr4"})', function () {
    it('should return a `Client` instance with the given options', function () {
      const client = solr.createClient({
        host: '10.10.10.10',
        port: 8080,
        core: 'core1',
        path: '/solr4',
      });
      assert.equal(client.options.host, '10.10.10.10');
      assert.equal(client.options.port, 8080);
      assert.equal(client.options.core, 'core1');
      assert.equal(client.options.path, '/solr4');
    });
  });
  describe('.createClient({ secure : true })', function () {
    it('should create a `Client` instance with secure set to true', function () {
      const options = {
        secure: true,
      };
      const client = solr.createClient(options);
      assert.isTrue(client.options.secure);
    });
  });
});
