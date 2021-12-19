function caughtError(client) {
  process.on('uncaughtException', err => {
    console.log(err)
  });
  process.on('uncaughtExceptionMonitor', err => {
    console.log(err)
  });
process.on('unhandledRejection', err => {
  console.log(err)
});
client.on('warn', function(info) {
  console.log('Warning:\n', info)
});
client.on('error', function(info) {
  console.log(info)
});
  }
module.exports = {
  caughtError,
}  
