
const mon = document.getElementById("mon")
const tue = document.getElementById("tue")
const wed = document.getElementById("wed")
const thu = document.getElementById("thu")
const fri = document.getElementById("fri")
const sat = document.getElementById("sat")
const sun = document.getElementById("sun")
const columnMon = document.getElementById("column-mon");
const columnTue = document.getElementById("column-tue");
const columnWed = document.getElementById("column-wed");
const columnThu = document.getElementById("column-thu");
const columnFri = document.getElementById("column-fri");
const columnSat = document.getElementById("column-sat");
const columnSun = document.getElementById("column-sun");

const getData = async function () {
const res = await fetch("/data.json");
const data = await res.json();

  function sortData() {
    mon.addEventListener("mouseover", () => document.getElementById("mon-num").innerHTML= (data[0]["amount"]))
    mon.addEventListener("mouseleave", () => document.getElementById("mon-num").innerHTML= "")
    tue.addEventListener("mouseover", () => document.getElementById("tue-num").innerHTML= (data[1]["amount"]))
    tue.addEventListener("mouseleave", () => document.getElementById("tue-num").innerHTML= "")
    wed.addEventListener("mouseover", () => document.getElementById("wed-num").innerHTML= (data[2]["amount"]))
    wed.addEventListener("mouseleave", () => document.getElementById("wed-num").innerHTML= "")
    thu.addEventListener("mouseover", () => document.getElementById("thu-num").innerHTML= (data[3]["amount"]))
    thu.addEventListener("mouseleave", () => document.getElementById("thu-num").innerHTML= "")
    fri.addEventListener("mouseover", () => document.getElementById("fri-num").innerHTML= (data[4]["amount"]))
    fri.addEventListener("mouseleave", () => document.getElementById("fri-num").innerHTML= "")
    sat.addEventListener("mouseover", () => document.getElementById("sat-num").innerHTML= (data[5]["amount"]))
    sat.addEventListener("mouseleave", () => document.getElementById("sat-num").innerHTML= "")
    sun.addEventListener("mouseover", () => document.getElementById("sun-num").innerHTML= (data[6]["amount"]))
    sun.addEventListener("mouseleave", () => document.getElementById("sun-num").innerHTML= "")
  }
  sortData();

  function assignData() {
    columnMon.style.height = (parseInt(data[0]["amount"]) + "px");
    columnTue.style.height = (parseInt(data[1]["amount"]) + "px");;
    columnWed.style.height = (parseInt(data[2]["amount"]) + "px");;
    columnThu.style.height = (parseInt(data[3]["amount"]) + "px");;
    columnFri.style.height = (parseInt(data[4]["amount"]) + "px");;
    columnSat.style.height = (parseInt(data[5]["amount"]) + "px");;
    columnSun.style.height = (parseInt(data[6]["amount"]) + "px");;
    }
  assignData();
};
getData();   
