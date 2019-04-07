module.exports = {
  getSystemInfo: function(req) {
    const userAgent = req.header("user-agent");
    const systemInfo = userAgent.slice(
      userAgent.indexOf("(") + 1,
      userAgent.indexOf(")")
    );
    return systemInfo;
  }
};
