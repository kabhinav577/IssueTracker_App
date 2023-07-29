module.exports.home = (req, res)=> {
    return res.render('homepage', {
        title: 'Issue Tracker | Home'
    });
}