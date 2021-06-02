var img=[
    "http://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2017/11/23/z_jun-p10-My-brother.jpg?itok=UCXKg-Z9",
    "https://us.123rf.com/450wm/yupiramos/yupiramos1904/yupiramos190411820/123548246-young-mother-with-little-son-characters-vector-illustration-design.jpg?ver=6", 
    "https://thumbs.dreamstime.com/b/superhero-dad-cartoon-characters-family-his-son-celebrating-father-s-day-boy-proud-his-father-94880991.jpg",
   ];
   var i=0;
   function move(){
     if (i==9){
       i=0;
   }
     document.getElementById("monkey").src = img[i];
     i++;
   }