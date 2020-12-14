// 显示完整的天气列表
exports.weather_list = (req, res) => { res.send('未实现：天气列表'); };

// 为每位天气显示详细信息的页面
exports.weather_detail = (req, res) => { res.send('未实现：天气详细信息：' + req.params.id); };

// 由 GET 显示创建天气的表单
exports.weather_create_get = (req, res) => { res.send('未实现：天气创建表单的 GET'); };

// 由 POST 处理天气创建操作
exports.weather_create_post = (req, res) => { res.send('未实现：创建天气的 POST'); };

// 由 GET 显示删除天气的表单
exports.weather_delete_get = (req, res) => { res.send('未实现：天气删除表单的 GET'); };

// 由 POST 处理天气删除操作
exports.weather_delete_post = (req, res) => { res.send('未实现：删除天气的 POST'); };

// 由 GET 显示更新天气的表单
exports.weather_update_get = (req, res) => { res.send('未实现：天气更新表单的 GET'); };

// 由 POST 处理天气更新操作
exports.weather_update_post = (req, res) => { res.send('未实现：更新天气的 POST'); };