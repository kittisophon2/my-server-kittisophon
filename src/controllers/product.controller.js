exports.get = (req,res) =>{
    res.send("Get product here");
}

exports.getById = (req,res) =>{
    res.send("Get product here " + req.params.id);
}

exports.create = (req,res) =>{
    res.send("Create a product ");
}