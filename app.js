
let tasks = [
    {
        "title": " قراءة كتاب",
        "date": "24/8/2024",
        "isDone": false
    },
    {
        "title": "انهاء المشروع النهائي",
        "date": "24/8/2024",
        "isDone": false
    },
    {
        "title": "انهاء كورس الجافاسكريبت",
        "date": "24/8/2024",
        "isDone": false
    },
    {
        "title": "anthoer step",
        "date": "24/8/2024",
        "isDone": true
    }
]


// =======STORAGE FUNCTION///
 function getTaskFromStorage(){
 let retrievedTasks = JSON.parse (localStorage.getItem("tasks"))
 
   tasks = retrievedTasks ?? []  //Short Way//
  
 /*if(retrievedTasks == null){      
    tasks = []                        //// classic way// 
 }else{
    tasks =  retrievedTasks
 }  */
}

getTaskFromStorage()

function storeTask(){

let tasksString = JSON.stringify(tasks)
localStorage.setItem("tasks" , tasksString)

}
  
 