
exports.getCustomUI = (req, res) => {
    res.render('custom_dashboard', {
        title: 'Page Dashboard',
        subTitle: 'Page Dashbaord',
    });
};