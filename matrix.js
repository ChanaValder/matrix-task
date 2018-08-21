
function onLoad()
{
    var div = document.getElementById("myDiv");
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var j = 0; j <= 2; j++) {

        var row = document.createElement("tr");

        for (var i = 0; i <= 2; i++) {
          
         var cell = document.createElement("td");    

            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "0");
    tbl.setAttribute("id","myTable");
    div.appendChild(tbl);
   
}


function hilight(num) {

    var MyTable = document.getElementById("myTable");
    for (var i = 0, row; row = MyTable.rows[i]; i++) {

        for (var j = 0, col; col = row.cells[j]; j++) {
            col.style.backgroundColor="rgb(59, 54, 54)"
         switch (num) {
             case 1:
                 if(i+j<=MyTable.children[0].childElementCount-1)
                 col.style.backgroundColor="darkslategray";
                 break;
                 case 2:
                 if(i==j||i+j==MyTable.children[0].childElementCount-1)
                 col.style.backgroundColor="darkslategray";
                 break;
                 case 3:
                 if(i+j>=MyTable.children[0].childElementCount-1)
                 col.style.backgroundColor="darkslategray";
                 break;
                 case 4:
                 if(i==0||j==0||i==MyTable.children[0].childElementCount-1||j==MyTable.children[0].childElementCount-1)
                 col.style.backgroundColor="darkslategray";
                 break;
         
             default:
                 break;
         }      
        }
    }

}






