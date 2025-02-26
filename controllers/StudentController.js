import express from 'express';

let fetchStudents =async(req,res)=>{
    res.send(result);
}


let updateStudent =async(req,res)=>{
    res.send("update students");
}

let removeStudent =async(req,res)=>{
    res.send(" delete students");
}

let createStudent =async(req,res)=>{
    res.send("create students");
}

export {fetchStudents, createStudent, removeStudent, updateStudent};