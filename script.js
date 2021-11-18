var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider1");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

function select(){
    var selected = document.getElementById("data");
    var selected1 = document.getElementById("data1");
    var selected2 = document.getElementById("data2");
    var selected3 = document.getElementById("data3");
    var selected4 = document.getElementById("data4");
    var selected5 = document.getElementById("data5");
    var sec2img = document.getElementById("table-img");
    var sec2txt = document.getElementById("table-txt");
    var sec2img1 = document.getElementById("table-img1");
    var sec2txt1 = document.getElementById("table-txt1");
    var sec2img2 = document.getElementById("table-img2");
    var sec2txt2 = document.getElementById("table-txt2");
    var sec2img3 = document.getElementById("table-img3");
    var sec2txt3 = document.getElementById("table-txt3");
    var sec2img4= document.getElementById("table-img4");
    var sec2txt4 = document.getElementById("table-txt4");
    var sec2img5 = document.getElementById("table-img5");
    var sec2txt5 = document.getElementById("table-txt5");
    if(selected.style.backgroundColor === ""){
        selected.style.backgroundColor = "rgb(235, 85, 80)";
        sec2txt.style.color = "white";
        sec2img.style.filter = "brightness(0) invert(1)";
        selected1.style.backgroundColor = "";
        selected2.style.backgroundColor = "";
        selected3.style.backgroundColor = "";
        selected4.style.backgroundColor = "";
        selected5.style.backgroundColor = "";
        sec2txt1.style.color = "rgb(235, 85, 80)";
        sec2img1.style.filter = "brightness(1) invert(0)";
        sec2txt2.style.color = "rgb(235, 85, 80)";
        sec2img2.style.filter = "brightness(1) invert(0)";
        sec2txt3.style.color = "rgb(235, 85, 80)";
        sec2img3.style.filter = "brightness(1) invert(0)";
        sec2txt4.style.color = "rgb(235, 85, 80)";
        sec2img4.style.filter = "brightness(1) invert(0)";
        sec2txt5.style.color = "rgb(235, 85, 80)";
        sec2img5.style.filter = "brightness(1) invert(0)";
    }else{
        selected.style.backgroundColor = "";
        sec2txt.style.color = "rgb(235, 85, 80)";
        sec2img.style.filter = "brightness(1) invert(0)";
    }

}

function select1(){
    var selected = document.getElementById("data");
    var selected1 = document.getElementById("data1");
    var selected2 = document.getElementById("data2");
    var selected3 = document.getElementById("data3");
    var selected4 = document.getElementById("data4");
    var selected5 = document.getElementById("data5");
    var sec2img = document.getElementById("table-img");
    var sec2txt = document.getElementById("table-txt");
    var sec2img1 = document.getElementById("table-img1");
    var sec2txt1 = document.getElementById("table-txt1");
    var sec2img2 = document.getElementById("table-img2");
    var sec2txt2 = document.getElementById("table-txt2");
    var sec2img3 = document.getElementById("table-img3");
    var sec2txt3 = document.getElementById("table-txt3");
    var sec2img4= document.getElementById("table-img4");
    var sec2txt4 = document.getElementById("table-txt4");
    var sec2img5 = document.getElementById("table-img5");
    var sec2txt5 = document.getElementById("table-txt5");
    if(selected1.style.backgroundColor === ""){
        selected1.style.backgroundColor = "rgb(235, 85, 80)";
        sec2txt1.style.color = "white";
        sec2img1.style.filter = "brightness(0) invert(1)";
        selected.style.backgroundColor = "";
        selected2.style.backgroundColor = "";
        selected3.style.backgroundColor = "";
        selected4.style.backgroundColor = "";
        selected5.style.backgroundColor = "";
        sec2txt.style.color = "rgb(235, 85, 80)";
        sec2img.style.filter = "brightness(1) invert(0)";
        sec2txt2.style.color = "rgb(235, 85, 80)";
        sec2img2.style.filter = "brightness(1) invert(0)";
        sec2txt3.style.color = "rgb(235, 85, 80)";
        sec2img3.style.filter = "brightness(1) invert(0)";
        sec2txt4.style.color = "rgb(235, 85, 80)";
        sec2img4.style.filter = "brightness(1) invert(0)";
        sec2txt5.style.color = "rgb(235, 85, 80)";
        sec2img5.style.filter = "brightness(1) invert(0)";
    }else{
        selected1.style.backgroundColor = "";
        sec2txt1.style.color = "rgb(235, 85, 80)";
        sec2img1.style.filter = "brightness(1) invert(0)";
    }

}

function select2(){
    var selected = document.getElementById("data");
    var selected1 = document.getElementById("data1");
    var selected2 = document.getElementById("data2");
    var selected3 = document.getElementById("data3");
    var selected4 = document.getElementById("data4");
    var selected5 = document.getElementById("data5");
    var sec2img = document.getElementById("table-img");
    var sec2txt = document.getElementById("table-txt");
    var sec2img1 = document.getElementById("table-img1");
    var sec2txt1 = document.getElementById("table-txt1");
    var sec2img2 = document.getElementById("table-img2");
    var sec2txt2 = document.getElementById("table-txt2");
    var sec2img3 = document.getElementById("table-img3");
    var sec2txt3 = document.getElementById("table-txt3");
    var sec2img4= document.getElementById("table-img4");
    var sec2txt4 = document.getElementById("table-txt4");
    var sec2img5 = document.getElementById("table-img5");
    var sec2txt5 = document.getElementById("table-txt5");
    if(selected2.style.backgroundColor === ""){
        selected2.style.backgroundColor = "rgb(235, 85, 80)";
        sec2txt2.style.color = "white";
        sec2img2.style.filter = "brightness(0) invert(1)";
        selected1.style.backgroundColor = "";
        selected.style.backgroundColor = "";
        selected3.style.backgroundColor = "";
        selected4.style.backgroundColor = "";
        selected5.style.backgroundColor = "";
        sec2txt1.style.color = "rgb(235, 85, 80)";
        sec2img1.style.filter = "brightness(1) invert(0)";
        sec2txt.style.color = "rgb(235, 85, 80)";
        sec2img.style.filter = "brightness(1) invert(0)";
        sec2txt3.style.color = "rgb(235, 85, 80)";
        sec2img3.style.filter = "brightness(1) invert(0)";
        sec2txt4.style.color = "rgb(235, 85, 80)";
        sec2img4.style.filter = "brightness(1) invert(0)";
        sec2txt5.style.color = "rgb(235, 85, 80)";
        sec2img5.style.filter = "brightness(1) invert(0)";
    }else{
        selected2.style.backgroundColor = "";
        sec2txt2.style.color = "rgb(235, 85, 80)";
        sec2img2.style.filter = "brightness(1) invert(0)";
    }

}

function select3(){
    var selected = document.getElementById("data");
    var selected1 = document.getElementById("data1");
    var selected2 = document.getElementById("data2");
    var selected3 = document.getElementById("data3");
    var selected4 = document.getElementById("data4");
    var selected5 = document.getElementById("data5");
    var sec2img = document.getElementById("table-img");
    var sec2txt = document.getElementById("table-txt");
    var sec2img1 = document.getElementById("table-img1");
    var sec2txt1 = document.getElementById("table-txt1");
    var sec2img2 = document.getElementById("table-img2");
    var sec2txt2 = document.getElementById("table-txt2");
    var sec2img3 = document.getElementById("table-img3");
    var sec2txt3 = document.getElementById("table-txt3");
    var sec2img4= document.getElementById("table-img4");
    var sec2txt4 = document.getElementById("table-txt4");
    var sec2img5 = document.getElementById("table-img5");
    var sec2txt5 = document.getElementById("table-txt5");
    if(selected3.style.backgroundColor === ""){
        selected3.style.backgroundColor = "rgb(235, 85, 80)";
        sec2txt3.style.color = "white";
        sec2img3.style.filter = "brightness(0) invert(1)";
        selected1.style.backgroundColor = "";
        selected2.style.backgroundColor = "";
        selected.style.backgroundColor = "";
        selected4.style.backgroundColor = "";
        selected5.style.backgroundColor = "";
        sec2txt1.style.color = "rgb(235, 85, 80)";
        sec2img1.style.filter = "brightness(1) invert(0)";
        sec2txt2.style.color = "rgb(235, 85, 80)";
        sec2img2.style.filter = "brightness(1) invert(0)";
        sec2txt.style.color = "rgb(235, 85, 80)";
        sec2img.style.filter = "brightness(1) invert(0)";
        sec2txt4.style.color = "rgb(235, 85, 80)";
        sec2img4.style.filter = "brightness(1) invert(0)";
        sec2txt5.style.color = "rgb(235, 85, 80)";
        sec2img5.style.filter = "brightness(1) invert(0)";
    }else{
        selected3.style.backgroundColor = "";
        sec2txt3.style.color = "rgb(235, 85, 80)";
        sec2img3.style.filter = "brightness(1) invert(0)";
    }

}

function select4(){
    var selected = document.getElementById("data");
    var selected1 = document.getElementById("data1");
    var selected2 = document.getElementById("data2");
    var selected3 = document.getElementById("data3");
    var selected4 = document.getElementById("data4");
    var selected5 = document.getElementById("data5");
    var sec2img = document.getElementById("table-img");
    var sec2txt = document.getElementById("table-txt");
    var sec2img1 = document.getElementById("table-img1");
    var sec2txt1 = document.getElementById("table-txt1");
    var sec2img2 = document.getElementById("table-img2");
    var sec2txt2 = document.getElementById("table-txt2");
    var sec2img3 = document.getElementById("table-img3");
    var sec2txt3 = document.getElementById("table-txt3");
    var sec2img4= document.getElementById("table-img4");
    var sec2txt4 = document.getElementById("table-txt4");
    var sec2img5 = document.getElementById("table-img5");
    var sec2txt5 = document.getElementById("table-txt5");
    if(selected4.style.backgroundColor === ""){
        selected4.style.backgroundColor = "rgb(235, 85, 80)";
        sec2txt4.style.color = "white";
        sec2img4.style.filter = "brightness(0) invert(1)";
        selected1.style.backgroundColor = "";
        selected2.style.backgroundColor = "";
        selected3.style.backgroundColor = "";
        selected.style.backgroundColor = "";
        selected5.style.backgroundColor = "";
        sec2txt1.style.color = "rgb(235, 85, 80)";
        sec2img1.style.filter = "brightness(1) invert(0)";
        sec2txt2.style.color = "rgb(235, 85, 80)";
        sec2img2.style.filter = "brightness(1) invert(0)";
        sec2txt3.style.color = "rgb(235, 85, 80)";
        sec2img3.style.filter = "brightness(1) invert(0)";
        sec2txt.style.color = "rgb(235, 85, 80)";
        sec2img.style.filter = "brightness(1) invert(0)";
        sec2txt5.style.color = "rgb(235, 85, 80)";
        sec2img5.style.filter = "brightness(1) invert(0)";
    }else{
        selected4.style.backgroundColor = "";
        sec2txt4.style.color = "rgb(235, 85, 80)";
        sec2img4.style.filter = "brightness(1) invert(0)";
    }

}

function select5(){
    var selected = document.getElementById("data");
    var selected1 = document.getElementById("data1");
    var selected2 = document.getElementById("data2");
    var selected3 = document.getElementById("data3");
    var selected4 = document.getElementById("data4");
    var selected5 = document.getElementById("data5");
    var sec2img = document.getElementById("table-img");
    var sec2txt = document.getElementById("table-txt");
    var sec2img1 = document.getElementById("table-img1");
    var sec2txt1 = document.getElementById("table-txt1");
    var sec2img2 = document.getElementById("table-img2");
    var sec2txt2 = document.getElementById("table-txt2");
    var sec2img3 = document.getElementById("table-img3");
    var sec2txt3 = document.getElementById("table-txt3");
    var sec2img4= document.getElementById("table-img4");
    var sec2txt4 = document.getElementById("table-txt4");
    var sec2img5 = document.getElementById("table-img5");
    var sec2txt5 = document.getElementById("table-txt5");
    if(selected5.style.backgroundColor === ""){
        selected5.style.backgroundColor = "rgb(235, 85, 80)";
        sec2txt5.style.color = "white";
        sec2img5.style.filter = "brightness(0) invert(1)";
        selected1.style.backgroundColor = "";
        selected2.style.backgroundColor = "";
        selected3.style.backgroundColor = "";
        selected4.style.backgroundColor = "";
        selected.style.backgroundColor = "";
        sec2txt1.style.color = "rgb(235, 85, 80)";
        sec2img1.style.filter = "brightness(1) invert(0)";
        sec2txt2.style.color = "rgb(235, 85, 80)";
        sec2img2.style.filter = "brightness(1) invert(0)";
        sec2txt3.style.color = "rgb(235, 85, 80)";
        sec2img3.style.filter = "brightness(1) invert(0)";
        sec2txt4.style.color = "rgb(235, 85, 80)";
        sec2img4.style.filter = "brightness(1) invert(0)";
        sec2txt.style.color = "rgb(235, 85, 80)";
        sec2img.style.filter = "brightness(1) invert(0)";
    }else{
        selected5.style.backgroundColor = "";
        sec2txt5.style.color = "rgb(235, 85, 80)";
        sec2img5.style.filter = "brightness(1) invert(0)";
    }

}



