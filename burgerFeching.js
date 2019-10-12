const Developers = require('../models/mod_developer')
const path=require('path')
module.exports.showDeveloper = (req, res, next) => {
    Developers.fetchAll().then((developerList) => {
       // console.log(developerList[0].specialization)
        res.render('profiles', { title: "Developers", allDeveloper: developerList })

    }).catch((err) => {
        // coprodIdnsole.log(err)
    });
}

module.exports.showSingleDeveloper = (req, res, next) => {
    let id=req.params.developerId
      console.log(id)
    Developers.findById(id).then((developer) => {
        console.log(developer)
      //  res.sendFile(path.join(__dirname,'..','views','add_developers.html'))
        res.render('edit_developer',{developer:developer,developerId:id})
    }).catch((err) => {
        
    });

}
module.exports.editDeveloper=(req,res,next)=>{
    new Developers(req.body.userName,req.body.specialization,req.body.github,req.body.country).updateDeveloper(req.params.developerId)
    .then((result) => {
      console.log(result)  
    }).catch((err) => {
        
    });
    res.redirect('/developers')
}
