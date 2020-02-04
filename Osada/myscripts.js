var tura=0;
var membership = new Array(37);
var free_space = new Array(37);
var trees = new Array(37);
var moves=1;
var movess=1;
var a=1;
var aa=0;
var build_p1= new Array(3);
var num_timber= new Array(0);
var grow_tree= new Array(0);
var soldier= new Array(0);
var army_free= new Array(76);
var mountains= new Array(37);
var waterr= new Array(37);
var iron_ore= new Array(37);
var lifes= new Array(0);
var menu_buildings_open=0;
var menu_army_open=0;
var p1_wood=5;
var p2_wood=5;
var p1_iron=0;
var p2_iron=0;
var p1_population=0;
var p2_population=0;
var cursor_free=0;
var tiktak=0;
var tiktak2=0;
var bigtiktak=0;
var tiktak3=0;
var tiktak7=0;
var first_render=0;
var num_p1_house=0;
var num_p2_house=0;
var p1_barrack=new Array(3);
p1_barrack[0]=0;
var p2_barrack=new Array(3);
p2_barrack[0]=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var attack=0;
var sprzatanie=1;
var zasieg=new Array(0);
var sprz_x;
var sprz_y;

var p1_mines=0;
var p2_mines=0;

var p1_capitol_x;
var p1_capitol_y;

var p2_capitol_x;
var p2_capitol_y;
/*
    var myArray1 = new Array(3)
    var a


    for (var i = 0; i < 3; i++) 
    {
        myArray1[i]=new Array(3)
        for (var j = 0; j < 3; j++) 
        {
            a=i+j;
            myArray1[i][j]=a;
            document.write(myArray1[i][j] + "&emsp;");
        }
        document.write("<br/>");
    }

*/

/*

SOLDIER[][]

soldier[x][0] = ID
soldier[x][1] = Typ żołnierza (lekka, ciezka itp...)
soldier[x][2] = Punkty Życia
soldier[x][3] = Punkty Ruchu
soldier[x][4] = Kontroler Żołnierza(Który gracz)
soldier[x][5] = X
soldier[x][6] = Y
soldier[x][7] = Czy żołnierz aktywny

*/

function resources(){
        {

            
            var amount_wood_unity = document.createElement("div");
            document.getElementById("wood").appendChild(amount_wood_unity);
            amount_wood_unity.setAttribute('id', 'amount_wood_unity');
            amount_wood_unity.setAttribute('class', 'number_resources');

            var amount_wood_dozens = document.createElement("div");
            document.getElementById("wood").appendChild(amount_wood_dozens);
            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
            amount_wood_dozens.setAttribute('class', 'number_resources');

            var amount_wood_hundreds = document.createElement("div");
            document.getElementById("wood").appendChild(amount_wood_hundreds);
            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
            amount_wood_hundreds.setAttribute('class', 'number_resources');
            
            
            var amount_iron_unity = document.createElement("div");
            document.getElementById("iron").appendChild(amount_iron_unity);
            amount_iron_unity.setAttribute('id', 'amount_iron_unity');
            amount_iron_unity.setAttribute('class', 'number_resources');

            var amount_iron_dozens = document.createElement("div");
            document.getElementById("iron").appendChild(amount_iron_dozens);
            amount_iron_dozens.setAttribute('id', 'amount_iron_dozens');
            amount_iron_dozens.setAttribute('class', 'number_resources');

            var amount_iron_hundreds = document.createElement("div");
            document.getElementById("iron").appendChild(amount_iron_hundreds);
            amount_iron_hundreds.setAttribute('id', 'amount_iron_hundreds');
            amount_iron_hundreds.setAttribute('class', 'number_resources');
            
            
            var amount_population_unity = document.createElement("div");
            document.getElementById("population").appendChild(amount_population_unity);
            amount_population_unity.setAttribute('id', 'amount_population_unity');
            amount_population_unity.setAttribute('class', 'number_resources');

            var amount_population_dozens = document.createElement("div");
            document.getElementById("population").appendChild(amount_population_dozens);
            amount_population_dozens.setAttribute('id', 'amount_population_dozens');
            amount_population_dozens.setAttribute('class', 'number_resources');

            var amount_population_hundreds = document.createElement("div");
            document.getElementById("population").appendChild(amount_population_hundreds);
            amount_population_hundreds.setAttribute('id', 'amount_population_hundreds');
            amount_population_hundreds.setAttribute('class', 'number_resources');
            
        }
    hundreds=0;
    dozens=0;
    unity=0;
    if(tura==0)
        {
            /*  Wood            */
            {
                var hundreds= Math.floor(p1_wood/100);
                var woody=p1_wood-hundreds*100;
                var dozens= Math.floor(woody/10);
                woody-=dozens*10;
                var unity= Math.floor(woody/1);
                        document.getElementById("amount_wood_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";

                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_wood_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }

                if(hundreds!=0)
                    {
                        document.getElementById("amount_wood_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
            /*  Iron            */
            {
                var hundreds= Math.floor(p1_iron/100);
                var irony=p1_iron-hundreds*100;
                var dozens= Math.floor(irony/10);
                irony-=dozens*10;
                var unity= Math.floor(irony/1);


                        document.getElementById("amount_iron_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_iron_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_iron_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
            /*  Population      */
            {
                var hundreds= Math.floor(p1_population/100);
                var populationy=p1_population-hundreds*100;
                var dozens= Math.floor(populationy/10);
                populationy-=dozens*10;
                var unity= Math.floor(populationy/1);

                        document.getElementById("amount_population_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_population_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_population_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
        }
    else
        {
            
            /*  Wood            */
            {
                var hundreds= Math.floor(p2_wood/100);
                var woody=p2_wood-hundreds*100;
                var dozens= Math.floor(woody/10);
                woody-=dozens*10;
                var unity= Math.floor(woody/1);


                        document.getElementById("amount_wood_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";

                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_wood_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(unity!=0)
                    {
                        document.getElementById("amount_wood_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";
                        
                    } 
            }

            
            /*  Iron            */
            {
                var hundreds= Math.floor(p2_iron/100);
                var irony=p2_iron-hundreds*100;
                var dozens= Math.floor(irony/10);
                irony-=dozens*10;
                var unity= Math.floor(irony/1);

                        document.getElementById("amount_iron_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_iron_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_iron_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
            /*  Population      */
            {
                var hundreds= Math.floor(p2_population/100);
                var populationy=p2_population-hundreds*100;
                var dozens= Math.floor(populationy/10);
                populationy-=dozens*10;
                var unity= Math.floor(populationy/1);


                        document.getElementById("amount_population_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_population_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_population_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
        }
}
    
function resourcess(){
        {

            
            var amount_wood_unity = document.createElement("div");
            document.getElementById("wood").appendChild(amount_wood_unity);
            amount_wood_unity.setAttribute('id', 'amount_wood_unity');
            amount_wood_unity.setAttribute('class', 'number_resources');

            var amount_wood_dozens = document.createElement("div");
            document.getElementById("wood").appendChild(amount_wood_dozens);
            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
            amount_wood_dozens.setAttribute('class', 'number_resources');

            var amount_wood_hundreds = document.createElement("div");
            document.getElementById("wood").appendChild(amount_wood_hundreds);
            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
            amount_wood_hundreds.setAttribute('class', 'number_resources');
            
            
            var amount_iron_unity = document.createElement("div");
            document.getElementById("iron").appendChild(amount_iron_unity);
            amount_iron_unity.setAttribute('id', 'amount_iron_unity');
            amount_iron_unity.setAttribute('class', 'number_resources');

            var amount_iron_dozens = document.createElement("div");
            document.getElementById("iron").appendChild(amount_iron_dozens);
            amount_iron_dozens.setAttribute('id', 'amount_iron_dozens');
            amount_iron_dozens.setAttribute('class', 'number_resources');

            var amount_iron_hundreds = document.createElement("div");
            document.getElementById("iron").appendChild(amount_iron_hundreds);
            amount_iron_hundreds.setAttribute('id', 'amount_iron_hundreds');
            amount_iron_hundreds.setAttribute('class', 'number_resources');
            
            
            var amount_population_unity = document.createElement("div");
            document.getElementById("population").appendChild(amount_population_unity);
            amount_population_unity.setAttribute('id', 'amount_population_unity');
            amount_population_unity.setAttribute('class', 'number_resources');

            var amount_population_dozens = document.createElement("div");
            document.getElementById("population").appendChild(amount_population_dozens);
            amount_population_dozens.setAttribute('id', 'amount_population_dozens');
            amount_population_dozens.setAttribute('class', 'number_resources');

            var amount_population_hundreds = document.createElement("div");
            document.getElementById("population").appendChild(amount_population_hundreds);
            amount_population_hundreds.setAttribute('id', 'amount_population_hundreds');
            amount_population_hundreds.setAttribute('class', 'number_resources');
            
        }
    hundreds=0;
    dozens=0;
    unity=0;
    if(tura==1)
        {
            /*  Wood            */
            {
                var hundreds= Math.floor(p1_wood/100);
                var woody=p1_wood-hundreds*100;
                var dozens= Math.floor(woody/10);
                woody-=dozens*10;
                var unity= Math.floor(woody/1);
                        document.getElementById("amount_wood_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";

                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_wood_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }

                if(hundreds!=0)
                    {
                        document.getElementById("amount_wood_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
            /*  Iron            */
            {
                var hundreds= Math.floor(p1_iron/100);
                var irony=p1_iron-hundreds*100;
                var dozens= Math.floor(irony/10);
                irony-=dozens*10;
                var unity= Math.floor(irony/1);


                        document.getElementById("amount_iron_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_iron_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_iron_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
            /*  Population      */
            {
                var hundreds= Math.floor(p1_population/100);
                var populationy=p1_population-hundreds*100;
                var dozens= Math.floor(populationy/10);
                populationy-=dozens*10;
                var unity= Math.floor(populationy/1);

                        document.getElementById("amount_population_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_population_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_population_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
        }
    else
        {
            
            /*  Wood            */
            {
                var hundreds= Math.floor(p2_wood/100);
                var woody=p2_wood-hundreds*100;
                var dozens= Math.floor(woody/10);
                woody-=dozens*10;
                var unity= Math.floor(woody/1);


                        document.getElementById("amount_wood_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";

                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_wood_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(unity!=0)
                    {
                        document.getElementById("amount_wood_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";
                        
                    } 
            }

            
            /*  Iron            */
            {
                var hundreds= Math.floor(p2_iron/100);
                var irony=p2_iron-hundreds*100;
                var dozens= Math.floor(irony/10);
                irony-=dozens*10;
                var unity= Math.floor(irony/1);

                        document.getElementById("amount_iron_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_iron_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_iron_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
            /*  Population      */
            {
                var hundreds= Math.floor(p2_population/100);
                var populationy=p2_population-hundreds*100;
                var dozens= Math.floor(populationy/10);
                populationy-=dozens*10;
                var unity= Math.floor(populationy/1);


                        document.getElementById("amount_population_unity").innerHTML="<img src='img/numbers/"+unity+".png'>";


                if((dozens!=0 && hundreds!=0) || (dozens==0 && hundreds!=0) || (dozens!=0 && hundreds==0))
                    {
                        document.getElementById("amount_population_dozens").innerHTML="<img src='img/numbers/"+dozens+".png'>";

                    }
                if(hundreds!=0)
                    {
                        document.getElementById("amount_population_hundreds").innerHTML="<img src='img/numbers/"+hundreds+".png'>";
                    }
            }
            
        }
}

function map(){
    var x;
    var y;
    var margintop=0;
    var marginleft=0;
    resources();
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.getElementById("end").innerHTML = "<img src='img/end.png>";
    document.getElementById("pts_fields").innerHTML = "<img src='img/movess_1_1.png' id='moves'>";
    document.getElementById("ptss_fields").innerHTML = "<img src='img/moves_1_1.png' id='movess'>";
    document.getElementById("rightarrow").innerHTML = "<img src='img/p1_menuarrow.png' id='rightarrow'>";
    document.getElementById("end").innerHTML = "<img src='img/end.png'>";
    
    for(x=0;x<76;x++)
        {
            army_free[x] = new Array(76);
            for(y=0;y<76;y++)
                {
                    army_free[x][y]=0;
                }
        }
    
    for(y=0;y<37;y++)
        {
            membership[y]=new Array(76);
            free_space[y] = new Array(76);
            trees[y] = new Array(76);
            mountains[y]= new Array(37);
            waterr[y]= new Array(37);
            iron_ore[y]= new Array(37);
            
            for(x=0;x<76;x++)
                {
                    
                    //  COMPLITING  TABLE
                    
                    membership[y][x]=0;
                    free_space[y][x]=0;
                    trees[y][x]=0;
                    mountains[y][x]=0;
                    waterr[y][x]=0;
                    iron_ore[y][x]=0;
                    
                    
                    //  GRID
                    var grid = document.createElement("div");
                    document.body.appendChild(grid);
                    grid.setAttribute('class', 'grid');
                    grid.setAttribute('id',"grid"+x+"/"+y);
                    grid.setAttribute('onclick',"ccolor("+x+","+y+")");
                    document.getElementById("grid"+x+"/"+y).innerHTML = "<img src='img/empty.png'>";
                    document.getElementById("grid"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("grid"+x+"/"+y).style.left = marginleft+"px";
                    
                    //  GRASS
                    
                    var grass = document.createElement("div");
                    document.body.appendChild(grass);
                    grass.setAttribute('class', 'grass');
                    grass.setAttribute('id',"grass"+x+"/"+y);
                    
                    if(x>=13 && x<=15 && y>=9 && y<=11)
                        {
                            capitolP1(x,y);
                        }
                    
                    if(x>=56 && x<=58 && y>=27 && y<=29)
                        {
                            capitolP2(x,y);
                        }
                    
                    // FOREST
                    
                    if(x>=5 && x<=11 && y==15)
                            tree(x,y);
                    if(x>=4 && x<=9 && y==14)
                            tree(x,y);
                    if(x>=5 && x<=7 && y==13)
                            tree(x,y);
                    if(x>=6 && x<=11 && y==16)
                            tree(x,y);
                    if(x>=7 && x<=8 && y==17)
                            tree(x,y);
                    
                    if(x>=60 && x<=66 && y==23)
                            tree(x,y);
                    if(x>=60 && x<=65 && y==22)
                            tree(x,y);
                    if(x>=62 && x<=67 && y==24)
                            tree(x,y);
                    if(x>=63 && x<=64 && y==21)
                            tree(x,y);
                    if(x>=64 && x<=66 && y==25)
                            tree(x,y);
                    if(x>=19 && x<=20 && y==2)
                            tree(x,y);
                    if(x==21 && y==3)
                            tree(x,y);
                    if(x==21 && y==4)
                            tree(x,y);
                    if(x>=21 && x<=22 && y==5)
                            tree(x,y);
                    if(x==19 && y==5)
                            tree(x,y);
                    if(x>=19 && x<=22 && y==6)
                            tree(x,y);
                    if(x>=20 && x<=22 && y==7)
                            tree(x,y);
                    if(x>=20 && x<=22 && y==8)
                            tree(x,y);
                    if(x>=20 && x<=22 && y==9)
                            tree(x,y);
                    if(x>=19 && x<=21 && y==10)
                            tree(x,y);
                    if(x>=51 && x<=52 && y==36)
                            tree(x,y);
                    if(x==50 && y==35)
                            tree(x,y);
                    if(x==50 && y==34)
                            tree(x,y);
                    if(x>=49 && x<=50 && y==33)
                            tree(x,y);
                    if(x==52 && y==33)
                            tree(x,y);
                    if(x>=49 && x<=52 && y==32)
                            tree(x,y);
                    if(x>=49 && x<=51 && y==31)
                            tree(x,y);
                    if(x>=49 && x<=51 && y==30)
                            tree(x,y);
                    if(x>=49 && x<=51 && y==29)
                            tree(x,y);
                    if(x>=50 && x<=52 && y==28)
                            tree(x,y);
                    
                    //  SEAS
                    
                    if(x>=0 && x<=30 && y==36)
                            water(x,y);
                    if(x>=0 && x<=30 && y==35)
                            water(x,y);
                    if(x>=0 && x<=29 && y==34)
                            water(x,y);
                    if(x>=0 && x<=26 && y==33)
                            water(x,y);
                    if(x>=3 && x<=25 && y==32)
                            water(x,y);
                    if(x>=4 && x<=23 && y==31)
                            water(x,y);
                    if(x>=6 && x<=23 && y==30)
                            water(x,y);
                    if(x>=8 && x<=22 && y==29)
                            water(x,y);
                    if(x>=10 && x<=21 && y==28)
                            water(x,y);
                    if(x>=13 && x<=18 && y==27)
                            water(x,y);
                    
                    if(x>=46 && x<=76 && y==0)
                            water(x,y);
                    if(x>=46 && x<=76 && y==1)
                            water(x,y);
                    if(x>=47 && x<=76 && y==2)
                            water(x,y);
                    if(x>=50 && x<=76 && y==3)
                            water(x,y);
                    if(x>=51 && x<=72 && y==4)
                            water(x,y);
                    if(x>=53 && x<=71 && y==5)
                            water(x,y);
                    if(x>=53 && x<=69 && y==6)
                            water(x,y);
                    if(x>=54 && x<=67 && y==7)
                            water(x,y);
                    if(x>=55 && x<=65 && y==8)
                            water(x,y);
                    if(x>=58 && x<=62 && y==9)
                            water(x,y);
                    
                    if(x>=37 && x<=39 && y<=20 && y>=16)
                            water(x,y);
                    if(x==36 && y<=19 && y>=17)
                            water(x,y);
                    if(x==41 && y<=18 && y>=17)
                            water(x,y);
                    if(x==40 && y<=19 && y>=17)
                            water(x,y);
                    if(x==35 && y<=19 && y>=18)
                            water(x,y);
                    
                    //  MOUNTAINS
                    
                    if(x>=50 && x<=52 && y==5)
                        mountain(x,y)
                    if(x>=49 && x<=52 && y==6)
                        mountain(x,y)
                    if(x>=47 && x<=51 && y==7)
                        mountain(x,y)
                    if(x>=46 && x<=50 && y==8)
                        mountain(x,y)
                    if(x>=44 && x<=48 && y==9)
                        mountain(x,y)
                    if(x>=45 && x<=47 && y==10)
                        mountain(x,y)
                    if(x==43 && y==13)
                        mountain(x,y)
                    if(x>=41 && x<=44 && y==14)
                        mountain(x,y)
                    if(x>=39 && x<=43 && y==15)
                        mountain(x,y)
                    if(x>=40 && x<=42 && y==16)
                        mountain(x,y)
                    
                    if(x>=24 && x<=26 && y==31)
                        mountain(x,y)
                    if(x>=24 && x<=27 && y==30)
                        mountain(x,y)
                    if(x>=25 && x<=29 && y==29)
                        mountain(x,y)
                    if(x>=26 && x<=30 && y==28)
                        mountain(x,y)
                    if(x>=28 && x<=32 && y==27)
                        mountain(x,y)
                    if(x>=29 && x<=31 && y==26)
                        mountain(x,y)
                    if(x==33 && y==23)
                        mountain(x,y)
                    if(x>=32 && x<=35 && y==22)
                        mountain(x,y)
                    if(x>=33 && x<=37 && y==21)
                        mountain(x,y)
                    if(x>=34 && x<=36 && y==20)
                        mountain(x,y)
                    if(x>=12 && x<=18 && y==2)
                        mountain(x,y)
                    if(x>=11 && x<=12 && y==3)
                        mountain(x,y)
                    if(x>=14 && x<=15 && y==3)
                        mountain(x,y)
                    if(x>=17 && x<=20 && y==3)
                        mountain(x,y)
                    if(x>=10 && x<=12 && y==4)
                        mountain(x,y)
                    if(x==20 && y==4)
                        mountain(x,y)
                    if(x==20 && y==5)
                        mountain(x,y)
                    if(x==11 && y==5)
                        mountain(x,y)
                    if(x>=53 && x<=59 && y==36)
                        mountain(x,y)
                    if(x>=51 && x<=54 && y==35)
                        mountain(x,y)
                    if(x>=56 && x<=57 && y==35)
                        mountain(x,y)
                    if(x>=59 && x<=60 && y==35)
                        mountain(x,y)
                    if(x==51 && y==34)
                        mountain(x,y)
                    if(x>=59 && x<=61 && y==34)
                        mountain(x,y)
                    if(x==51 && y==33)
                        mountain(x,y)
                    if(x==60 && y==33)
                        mountain(x,y)
                    
                    //  IRON
                    
                    if(x==55 && y==35)
                        ironn_ore(x,y)
                    if(x==58 && y==35)
                        ironn_ore(x,y)
                    if(x==52 && y==34)
                        ironn_ore(x,y)
                    if(x==13 && y==3)
                        ironn_ore(x,y)
                    if(x==16 && y==3)
                        ironn_ore(x,y)
                    if(x==19 && y==4)
                        ironn_ore(x,y)
                    
                    //  CAPITOLS
                    
                    if(x==14 && y==10)
                        {
                            var p1_capitol = document.createElement("div");
                            document.body.appendChild(p1_capitol);
                            p1_capitol.setAttribute('class', 'capitol');
                            p1_capitol.setAttribute('id',"capitol"+x+"/"+y);
                            document.getElementById("capitol"+x+"/"+y).style.top = margintop+"px";
                            document.getElementById("capitol"+x+"/"+y).style.left = marginleft+"px";
                            document.getElementById("capitol"+x+"/"+y).innerHTML = "<img src='img/capitol.png'>";
                            free_space[y][x]=1;
                                p1_capitol_x=x;
                                p1_capitol_y=y;
                        }
                    if(x==57 && y==28)
                        {
                            var p2_capitol = document.createElement("div");
                            document.body.appendChild(p2_capitol);
                            p2_capitol.setAttribute('class', 'capitol');
                            p2_capitol.setAttribute('id',"capitol"+x+"/"+y);
                            document.getElementById("capitol"+x+"/"+y).style.top = margintop+"px";
                            document.getElementById("capitol"+x+"/"+y).style.left = marginleft+"px";
                            document.getElementById("capitol"+x+"/"+y).innerHTML = "<img src='img/capitol.png'>";
                            free_space[y][x]=1;
                                p2_capitol_capitol_x=x;
                                p2_capitol_y=y;
                        }
                    else
                        {
                            document.getElementById("grass"+x+"/"+y).innerHTML = "<img src='img/grass.png'>";
                        }
                    document.getElementById("grass"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("grass"+x+"/"+y).style.left = marginleft+"px";
                    marginleft = marginleft + 25;
                }
            margintop = margintop + 25;
            marginleft = 0;
        }
}
    
//      COLORS OF AREAS AROUND 2 CAPITOLS

function capitolP1(x,y){
    membership[y][x]=1;
    var color = document.createElement("div");
    document.body.appendChild(color);
    color.setAttribute('class', 'color');
    color.setAttribute('id',"color"+x+"/"+y);
    document.getElementById("color"+x+"/"+y).innerHTML = "<img src='img/p1_color.png'>";
    var margintop=y*25; 
    var marginleft=x*25;
    document.getElementById("color"+x+"/"+y).style.top = margintop+"px";
    document.getElementById("color"+x+"/"+y).style.left = marginleft+"px";
}

function capitolP2(x,y){
    membership[y][x]=2;
    var color = document.createElement("div");
    document.body.appendChild(color);
    color.setAttribute('class', 'color');
    color.setAttribute('id',"color"+x+"/"+y);
    document.getElementById("color"+x+"/"+y).innerHTML = "<img src='img/p2_color.png'>";
    var margintop=y*25; 
    var marginleft=x*25;
    document.getElementById("color"+x+"/"+y).style.top = margintop+"px";
    document.getElementById("color"+x+"/"+y).style.left = marginleft+"px";
}

//      TREES

function tree(x,y){
    var spruce = document.createElement("div");
    document.body.appendChild(spruce);
    spruce.setAttribute('class', 'spruce');
    spruce.setAttribute('id',"spruce"+x+"/"+y);
    document.getElementById("spruce"+x+"/"+y).innerHTML = "<img src='img/spruce.png'>";
    var margintop=y*25; 
    var marginleft=x*25;
    document.getElementById("spruce"+x+"/"+y).style.top = margintop+"px";
    document.getElementById("spruce"+x+"/"+y).style.left = marginleft+"px";
    document.getElementById("spruce"+x+"/"+y).setAttribute("onclick","cut_tree("+x+","+y+")");
    trees[y][x]=1;
}

function cut_tree(x,y){
    if(trees[y][x]==1 && membership[y][x]==1 && tura==0 && moves==1)
        {
            var elem = document.getElementById("spruce"+x+"/"+y);
                    elem.parentNode.removeChild(elem);
            trees[y][x]=0;
            if(p1_wood==9)
                {
                    var amount_wood_dozens = document.createElement("div");
                    document.getElementById("wood").appendChild(amount_wood_dozens);
                    amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                    amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                    var amount_wood_hundreds = document.createElement("div");
                    document.getElementById("wood").appendChild(amount_wood_hundreds);
                    amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                    amount_wood_hundreds.setAttribute('class', 'number_resources');
                    p1_wood++;
                }
            else
                {
                    p1_wood++;
                }
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            resources();
            moves--;
        }
    else if(trees[y][x]==1 && membership[y][x]==2 && tura==1 && moves==1)
        {
            var elem = document.getElementById("spruce"+x+"/"+y);
                    elem.parentNode.removeChild(elem);
            trees[y][x]=0;
            if(p2_wood==9)
                {
                    var amount_wood_dozens = document.createElement("div");
                    document.getElementById("wood").appendChild(amount_wood_dozens);
                    amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                    amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                    var amount_wood_hundreds = document.createElement("div");
                    document.getElementById("wood").appendChild(amount_wood_hundreds);
                    amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                    amount_wood_hundreds.setAttribute('class', 'number_resources');
                    p2_wood++;
                }
            else
                {
                    p2_wood++;
                }
            resources();
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            moves--;
        }
    else
        {
            ccolor(x,y);
        }
}

//      WATER

function water(x,y){
    var water = document.createElement("div");
    document.body.appendChild(water);
    water.setAttribute('class', 'water');
    water.setAttribute('id',"water"+x+"/"+y);
    document.getElementById("water"+x+"/"+y).innerHTML = "<img src='img/water.png'>";
    var margintop=y*25; 
    var marginleft=x*25;
    document.getElementById("water"+x+"/"+y).style.top = margintop+"px";
    document.getElementById("water"+x+"/"+y).style.left = marginleft+"px";
    waterr[y][x]++;
}

//      IRON
function ironn_ore(x,y){
    var iron = document.createElement("div");
    document.body.appendChild(iron);
    iron.setAttribute('class', 'mountain');
    iron.setAttribute('id',"iron"+x+"/"+y);
    document.getElementById("iron"+x+"/"+y).innerHTML = "<img src='img/iron_ore.png'>";
    var margintop=y*25; 
    var marginleft=x*25;
    document.getElementById("iron"+x+"/"+y).style.top = margintop+"px";
    document.getElementById("iron"+x+"/"+y).style.left = marginleft+"px";
    iron_ore[y][x]++;
}

//      MOUNTAIN

function mountain(x,y){
    var mountain = document.createElement("div");
    document.body.appendChild(mountain);
    mountain.setAttribute('class', 'mountain');
    mountain.setAttribute('id',"mountain"+x+"/"+y);
    document.getElementById("mountain"+x+"/"+y).innerHTML = "<img src='img/mountain.png'>";
    var margintop=y*25; 
    var marginleft=x*25;
    document.getElementById("mountain"+x+"/"+y).style.top = margintop+"px";
    document.getElementById("mountain"+x+"/"+y).style.left = marginleft+"px";
    mountains[y][x]++;
}

//      COLORING BY CLICK

function ccolor(x,y){
    if(tura==0)
        {
            if((membership[y-1][x]==1 || membership[y][x-1]==1 || membership[y+1][x]==1 || membership[y][x+1]==1) && membership[y][x]==0 && movess>0)
                {
                    var color = document.createElement("div");
                    membership[y][x]=1;
                    document.body.appendChild(color);
                    color.setAttribute('class', 'color');
                    color.setAttribute('id',"color"+x+"/"+y);
                    document.getElementById("color"+x+"/"+y).innerHTML = "<img src='img/p1_color.png'>";
                    document.getElementById("ptss_fields").innerHTML = "<img src='img/moves_0_1.png' id='movess'>";
                    var margintop=y*25; 
                    var marginleft=x*25;
                    document.getElementById("color"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("color"+x+"/"+y).style.left = marginleft+"px";
                    movess--;
                }
            }
        else
            {
                if((membership[y-1][x]==2 || membership[y][x-1]==2 || membership[y+1][x]==2 || membership[y][x+1]==2) && membership[y][x]==0 && movess>0)
                    {
                        var color = document.createElement("div");
                        membership[y][x]=2;
                        document.body.appendChild(color);
                        color.setAttribute('class' , 'color');
                        color.setAttribute('id',"color"+x+"/"+y);
                        document.getElementById("color"+x+"/"+y).innerHTML = "<img src='img/p2_color.png'>";
                        document.getElementById("ptss_fields").innerHTML = "<img src='img/moves_0_1.png' id='movess'>";
                        var margintop=y*25; 
                        var marginleft=x*25;
                        document.getElementById("color"+x+"/"+y).style.top = margintop+"px";
                        document.getElementById("color"+x+"/"+y).style.left = marginleft+"px";
                        movess--;
                    }
            }  
}

//      MENU

function menu_buildings(){
    var available = 4;
    if(menu_buildings_open==0)
        {
            for(var i=0;i<available;i++)
                {
                    var menu_buildings_field = document.createElement("div");
                    document.getElementById("buildings").appendChild(menu_buildings_field);
                    menu_buildings_field.setAttribute('class', 'menu_field');
                    menu_buildings_field.setAttribute('id',"menu_field_"+i);                    
                   
                    if(i!=available-1)
                        {
                            document.getElementById("menu_field_"+i).innerHTML = "<img src='img/menu_list.png'>";
                        }
                    else
                        {
                            document.getElementById("menu_field_"+i).innerHTML = "<img src='img/menu_list_bottom.png'>";
                        }
                    
                    if(i==0)
                        {
                            menu_buildings_field.setAttribute('onclick','build_house()');
                            var menu_house = document.createElement("div");
                            document.getElementById("menu_field_0").appendChild(menu_house);
                            menu_house.setAttribute('class', 'menu_build_icon');
                            menu_house.setAttribute('id',"menu_house");
                            document.getElementById("menu_house").innerHTML = "<img src='img/house.png'>";
                            
                            var menu_build_title = document.createElement("div");
                            document.getElementById("menu_field_0").appendChild(menu_build_title);
                            menu_build_title.setAttribute('id',"menu_build_title");
                            menu_build_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_build_title").innerHTML = "<p>Dom</p>";
                            
                            var menu_build_need = document.createElement("div");
                            document.getElementById("menu_field_0").appendChild(menu_build_need);
                            menu_build_need.setAttribute('id',"menu_build_need");
                            menu_build_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_build_needd = document.createElement("div");
                                    menu_build_needd.setAttribute('id','menu_build_need_wood'+j);
                                    document.getElementById("menu_build_need").appendChild(menu_build_needd);
                                    menu_build_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_build_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/5.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_build_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_build_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }                          
                        }
                    else if(i==1)
                        {
                            menu_buildings_field.setAttribute('onclick','build_timber()');
                            var menu_timber = document.createElement("div");
                            document.getElementById("menu_field_1").appendChild(menu_timber);
                            menu_timber.setAttribute('class', 'menu_build_icon');
                            menu_timber.setAttribute('id',"menu_timber");
                            document.getElementById("menu_timber").innerHTML = "<img src='img/timber_1x1.png'>";
                            
                            var menu_build_title = document.createElement("div");
                            document.getElementById("menu_field_1").appendChild(menu_build_title);
                            menu_build_title.setAttribute('id',"menu_timber_title");
                            menu_build_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_timber_title").innerHTML = "<p>Leśniczówka</p>";
                            
                            var menu_build_need = document.createElement("div");
                            document.getElementById("menu_field_1").appendChild(menu_build_need);
                            menu_build_need.setAttribute('id',"menu_timber_need");
                            menu_build_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_build_needd = document.createElement("div");
                                    menu_build_needd.setAttribute('id','menu_timber_need_wood'+j);
                                    document.getElementById("menu_timber_need").appendChild(menu_build_needd);
                                    menu_build_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_timber_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/1.png' class='menu_build_need_wood_numbers'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers' style='margin-left: 15px;'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_timber_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_timber_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }                 
                        }
                    else if(i==2)
                        {
                            menu_buildings_field.setAttribute('onclick','build_barrack()');
                            var menu_barrack = document.createElement("div");
                            document.getElementById("menu_field_2").appendChild(menu_barrack);
                            menu_barrack.setAttribute('class', 'menu_build_icon');
                            menu_barrack.setAttribute('id',"menu_barrack");
                            document.getElementById("menu_barrack").innerHTML = "<img src='img/barrack/barrack_mini.png'>";
                            
                            var menu_build_title = document.createElement("div");
                            document.getElementById("menu_field_2").appendChild(menu_build_title);
                            menu_build_title.setAttribute('id',"menu_barrack_title");
                            menu_build_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_barrack_title").innerHTML = "<p>Koszary</p>";
                            
                            var menu_build_need = document.createElement("div");
                            document.getElementById("menu_field_2").appendChild(menu_build_need);
                            menu_build_need.setAttribute('id',"menu_barrack_need");
                            menu_build_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_build_needd = document.createElement("div");
                                    menu_build_needd.setAttribute('id','menu_barrack_need_wood'+j);
                                    document.getElementById("menu_barrack_need").appendChild(menu_build_needd);
                                    menu_build_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_barrack_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/2.png' class='menu_build_need_wood_numbers'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers' style='margin-left: 15px;'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_barrack_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/2.png' class='menu_build_need_wood_numbers'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers' style='margin-left: 15px;'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_barrack_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/5.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }                 
                        }
                    else if(i==3)
                        {
                            menu_buildings_field.setAttribute('onclick','build_mine()');
                            var menu_mine = document.createElement("div");
                            document.getElementById("menu_field_3").appendChild(menu_mine);
                            menu_mine.setAttribute('class', 'menu_build_icon');
                            menu_mine.setAttribute('id',"menu_mine");
                            document.getElementById("menu_mine").innerHTML = "<img src='img/mine.png'>";
                            
                            var menu_build_title = document.createElement("div");
                            document.getElementById("menu_field_3").appendChild(menu_build_title);
                            menu_build_title.setAttribute('id',"menu_mine_title");
                            menu_build_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_mine_title").innerHTML = "<p>Kopalnia</p>";
                            
                            var menu_build_need = document.createElement("div");
                            document.getElementById("menu_field_3").appendChild(menu_build_need);
                            menu_build_need.setAttribute('id',"menu_mine_need");
                            menu_build_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_build_needd = document.createElement("div");
                                    menu_build_needd.setAttribute('id','menu_mine_need_wood'+j);
                                    document.getElementById("menu_mine_need").appendChild(menu_build_needd);
                                    menu_build_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_mine_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/1.png' class='menu_build_need_wood_numbers'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers' style='margin-left: 15px;'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_mine_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_mine_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/3.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }                          
                        }
                    
                }
            menu_buildings_open++;
        }
    else
        {
            menu_buildings_open--;
            for(var i=0;i<available;i++)
                {
                    var elem = document.getElementById("menu_field_"+i);
                    elem.parentNode.removeChild(elem);
                }
        }
    
    /*var x = document.getElementById("fields");
    
    if(a==1)
        {
            x.style.display = "initial";
            a--;
        }
    else
        {
        x.style.display = "none";
            a++;
        }*/
}

function menu_army(){
    var xy=0;
    if(tura==0)
        xy=1;
    else
        xy=2;
    var available = 4;
    if(tura==0 && p1_barrack[0]==0)
        {
            available=1;
            aa=1;
        }
    else if(tura==1 && p2_barrack[0]==0)
        {
            available=2;
            aa=1;
        }
    
    if(menu_army_open==0 && available==1)
        {
            menu_army_open++;
            var menu_army_field = document.createElement("div");
            document.getElementById("army").appendChild(menu_army_field);
            menu_army_field.setAttribute('class', 'menu_field');
            menu_army_field.setAttribute('id',"menu_fieldd_0");
            document.getElementById("menu_fieldd_0").innerHTML = "<img src='img/menu_list_bottom.png'>";
            
            var menu_army_title = document.createElement("div");
            document.getElementById("menu_fieldd_0").appendChild(menu_army_title);
            menu_army_title.setAttribute('id',"menu_army_title");
            menu_army_title.setAttribute('class',"menu_army_c_title");
            document.getElementById("menu_army_title").innerHTML = "<p>Najpierw zbuduj koszary</p>";
        }
    else if(menu_army_open==0 && available==2)
        {
            menu_army_open++;
            var menu_army_field = document.createElement("div");
            document.getElementById("army").appendChild(menu_army_field);
            menu_army_field.setAttribute('class', 'menu_field');
            menu_army_field.setAttribute('id',"menu_fieldd_0");
            document.getElementById("menu_fieldd_0").innerHTML = "<img src='img/menu_list_bottom.png'>";
            
            var menu_army_title = document.createElement("div");
            document.getElementById("menu_fieldd_0").appendChild(menu_army_title);
            menu_army_title.setAttribute('id',"menu_army_title");
            menu_army_title.setAttribute('class',"menu_army_c_title");
            document.getElementById("menu_army_title").innerHTML = "<p>Najpierw zbuduj koszary</p>";
        }
    else if(menu_army_open==0 && available==4)
        {
            aa=4;
            for(var i=0;i<available;i++)
                {
                    var menu_army_field = document.createElement("div");
                    document.getElementById("army").appendChild(menu_army_field);
                    menu_army_field.setAttribute('class', 'menu_field');
                    menu_army_field.setAttribute('id',"menu_fieldd_"+i);
                    
                    if(i!=available-1)
                        {
                            document.getElementById("menu_fieldd_"+i).innerHTML = "<img src='img/menu_list.png'>";
                        }
                    else
                        {
                            document.getElementById("menu_fieldd_"+i).innerHTML = "<img src='img/menu_list_bottom.png'>";
                        }
                    if(i==0)
                        {
                            
                            menu_army_field.setAttribute('onclick','made_light()');
                            var menu_light = document.createElement("div");
                            document.getElementById("menu_fieldd_0").appendChild(menu_light);
                            menu_light.setAttribute('class', 'menu_build_icon');
                            menu_light.setAttribute('id',"menu_light");
                            document.getElementById("menu_light").innerHTML = "<img src='img/army/p"+xy+"_light.png'>";
                            
                            var menu_army_title = document.createElement("div");
                            document.getElementById("menu_fieldd_0").appendChild(menu_army_title);
                            menu_army_title.setAttribute('id',"menu_army_title");
                            menu_army_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_army_title").innerHTML = "<p>Lekka Piechota</p>";
                            
                            var menu_army_need = document.createElement("div");
                            document.getElementById("menu_fieldd_0").appendChild(menu_army_need);
                            menu_army_need.setAttribute('id',"menu_army_need");
                            menu_army_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_army_needd = document.createElement("div");
                                    menu_army_needd.setAttribute('id','menu_army_need_wood'+j);
                                    document.getElementById("menu_army_need").appendChild(menu_army_needd);
                                    menu_army_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_army_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_army_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/5.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_army_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/1.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }                          
                        }
                    else if(i==1)
                        {
                            var xy=0;
                            if(tura==0)
                                xy=1;
                            else
                                xy=2;
                            
                            menu_army_field.setAttribute('onclick','made_heavy()');
                            var menu_heavy = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_heavy);
                            menu_heavy.setAttribute('class', 'menu_build_icon');
                            menu_heavy.setAttribute('id',"menu_heavy");
                            document.getElementById("menu_heavy").innerHTML = "<img src='img/army/p"+xy+"_heavy.png'>";
                            
                            var menu_army_title = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_army_title);
                            menu_army_title.setAttribute('id',"menu_heavy_title");
                            menu_army_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_heavy_title").innerHTML = "<p>Ciężka Piechota</p>";
                            
                            var menu_army_need = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_army_need);
                            menu_army_need.setAttribute('id',"menu_heavy_need");
                            menu_army_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_army_needd = document.createElement("div");
                                    menu_army_needd.setAttribute('id','menu_heavy_need_wood'+j);
                                    document.getElementById("menu_heavy_need").appendChild(menu_army_needd);
                                    menu_army_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_heavy_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_heavy_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/2.png' class='menu_build_need_wood_numbers'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers' style='margin-left: 15px;'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_heavy_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/1.png' class='menu_build_need_wood_numbers'>";
                                        }
                                } 
                            var menu_locked = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_locked);
                            menu_locked.setAttribute('class', 'menu_build_locked');
                            menu_locked.setAttribute('id',"menu_locked_heavy");
                            document.getElementById("menu_locked_heavy").innerHTML = "<img src='img/locked.png'>";
                        }
                    else if(i==2)
                        {
                            var xy=0;
                            if(tura==0)
                                xy=1;
                            else
                                xy=2;
                            
                            menu_army_field.setAttribute('onclick','made_horse()');
                            var menu_horse = document.createElement("div");
                            document.getElementById("menu_fieldd_2").appendChild(menu_horse);
                            menu_horse.setAttribute('class', 'menu_build_icon');
                            menu_horse.setAttribute('id',"menu_horse");
                            document.getElementById("menu_horse").innerHTML = "<img src='img/army/p"+xy+"_horse.png'>";
                            
                            var menu_army_title = document.createElement("div");
                            document.getElementById("menu_fieldd_2").appendChild(menu_army_title);
                            menu_army_title.setAttribute('id',"menu_horse_title");
                            menu_army_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_horse_title").innerHTML = "<p>Kawaleria</p>";
                            
                            var menu_army_need = document.createElement("div");
                            document.getElementById("menu_fieldd_2").appendChild(menu_army_need);
                            menu_army_need.setAttribute('id',"menu_horse_need");
                            menu_army_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_army_needd = document.createElement("div");
                                    menu_army_needd.setAttribute('id','menu_horse_need_wood'+j);
                                    document.getElementById("menu_horse_need").appendChild(menu_army_needd);
                                    menu_army_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_horse_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_horse_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/1.png' class='menu_build_need_wood_numbers'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers' style='margin-left: 15px;'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_horse_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/2.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }
                            var menu_locked = document.createElement("div");
                            document.getElementById("menu_fieldd_2").appendChild(menu_locked);
                            menu_locked.setAttribute('class', 'menu_build_locked');
                            menu_locked.setAttribute('id',"menu_locked_horse");
                            document.getElementById("menu_locked_horse").innerHTML = "<img src='img/locked.png'>";
                        }
                    else if(i==1)
                        {
                            var xy=0;
                            if(tura==0)
                                xy=1;
                            else
                                xy=2;
                            
                            menu_army_field.setAttribute('onclick','made_heavy()');
                            var menu_heavy = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_heavy);
                            menu_heavy.setAttribute('class', 'menu_build_icon');
                            menu_heavy.setAttribute('id',"menu_heavy");
                            document.getElementById("menu_heavy").innerHTML = "<img src='img/army/p"+xy+"_heavy.png'>";
                            
                            var menu_army_title = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_army_title);
                            menu_army_title.setAttribute('id',"menu_heavy_title");
                            menu_army_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_heavy_title").innerHTML = "<p>Ciężka Piechota</p>";
                            
                            var menu_army_need = document.createElement("div");
                            document.getElementById("menu_fieldd_1").appendChild(menu_army_need);
                            menu_army_need.setAttribute('id',"menu_heavy_need");
                            menu_army_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_army_needd = document.createElement("div");
                                    menu_army_needd.setAttribute('id','menu_heavy_need_wood'+j);
                                    document.getElementById("menu_heavy_need").appendChild(menu_army_needd);
                                    menu_army_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_heavy_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/5.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_heavy_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_heavy_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }
                        }
                    else if(i==3)
                        {
                            var xy=0;
                            if(tura==0)
                                xy=1;
                            else
                                xy=2;
                            
                            menu_army_field.setAttribute('onclick','made_archer()');
                            var menu_horse = document.createElement("div");
                            document.getElementById("menu_fieldd_3").appendChild(menu_horse);
                            menu_horse.setAttribute('class', 'menu_build_icon');
                            menu_horse.setAttribute('id',"menu_archer");
                            document.getElementById("menu_archer").innerHTML = "<img src='img/army/p"+xy+"_archer.png'>";
                            
                            var menu_army_title = document.createElement("div");
                            document.getElementById("menu_fieldd_3").appendChild(menu_army_title);
                            menu_army_title.setAttribute('id',"menu_archer_title");
                            menu_army_title.setAttribute('class',"menu_build_title");
                            document.getElementById("menu_archer_title").innerHTML = "<p>Łucznik</p>";
                            
                            var menu_army_need = document.createElement("div");
                            document.getElementById("menu_fieldd_3").appendChild(menu_army_need);
                            menu_army_need.setAttribute('id',"menu_archer_need");
                            menu_army_need.setAttribute('class',"menu_build_need");
                            
                            for(var j=0;j<3;j++)
                                {
                                    var menu_army_needd = document.createElement("div");
                                    menu_army_needd.setAttribute('id','menu_archer_need_wood'+j);
                                    document.getElementById("menu_archer_need").appendChild(menu_army_needd);
                                    menu_army_needd.setAttribute('class','menu_build_need_div');
                                    if(j==0)
                                        {
                                            document.getElementById("menu_archer_need_wood"+j).innerHTML="<img src='img/wood_mini.png'><img src='img/numbers/5.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==1)
                                        {
                                            document.getElementById("menu_archer_need_wood"+j).innerHTML="<img src='img/iron_mini.png'><img src='img/numbers/0.png' class='menu_build_need_wood_numbers'>";
                                        }
                                    else if(j==2)
                                        {
                                            document.getElementById("menu_archer_need_wood"+j).innerHTML="<img src='img/population_mini.png'><img src='img/numbers/1.png' class='menu_build_need_wood_numbers'>";
                                        }
                                }
                            var menu_locked = document.createElement("div");
                            document.getElementById("menu_fieldd_3").appendChild(menu_locked);
                            menu_locked.setAttribute('class', 'menu_build_locked');
                            menu_locked.setAttribute('id',"menu_locked_archer");
                            document.getElementById("menu_locked_archer").innerHTML = "<img src='img/locked.png'>";
                        }
                    
                }
            menu_army_open++;
        }
    else
        {
            menu_army_open--;
            for(var i=0;i<available;i++)
                {
                    var elem = document.getElementById("menu_fieldd_"+i);
                    elem.parentNode.removeChild(elem);
                }
        }
}

//      BUDOWANIE

function build_house(){
    if(tura==0 && p1_wood>=5 && cursor_free==0 && moves==1)
        {
            if(p1_wood<15 && p1_wood>=10)
                {
                    p1_wood-=5;
                    if(p1_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_wood-=5;
                }
            resources();
            
            var a=1;
            document.body.style.cursor="url('img/house_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_house("+x+","+y+")");
                        }
                }
        }
    else if(tura==1 && p2_wood>=5 && cursor_free==0 && moves==1)
        {
            if(p2_wood<15 && p2_wood>=10)
                {
                    p2_wood-=5;
                    if(p2_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_wood-=5;
                }
            resources();
            
            var a=1;
            document.body.style.cursor="url('img/house_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_house("+x+","+y+")");
                        }
                }
        }
}

function place_house(x,y){
    if(tura==0)
        var xy=1;
    else
        xy=2;
    if(membership[y-1][x-1]==xy && membership[y-1][x]==xy && membership[y-1][x+1]==xy && membership[y][x-1]==xy && membership[y][x]==xy && membership[y][x+1]==xy && membership[y+1][x-1]==xy && membership[y+1][x]==xy && membership[y+1][x+1]==xy && free_space[y-1][x-1]==0 && free_space[y-1][x]==0 && free_space[y-1][x+1]==0 && free_space[y][x-1]==0 && free_space[y][x]==0 && free_space[y][x+1]==0 && free_space[y+1][x-1]==0 && free_space[y+1][x]==0 && free_space[y+1][x+1]==0)
        {
            cursor_free--;
            document.body.style.cursor="default";
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/house.png'>";
            if(xy==1)
                {
                    p1_population++;
                    num_p1_house++;
                }
            else if(xy==2)
                {
                    p2_population++;
                    num_p2_house++;
                }
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            moves--;
            free_space[y][x]=1;
            for(var l=0;l<37;l++)
                {
                    for(var k=0;k<76;k++)
                        {
                            document.getElementById("grid"+k+"/"+l).removeAttribute("onclick","place_house("+k+","+l+")");
                            document.getElementById("grid"+k+"/"+l).setAttribute("onclick","ccolor("+k+","+l+")");
                        }
                }
            resources();
            
        }
}

function build_timber(){
    if(tura==0 && p1_wood>=10 && cursor_free==0 && moves==1)
        {
            if(p1_wood<20 && p1_wood>=10)
                {
                    p1_wood-=10;
                    if(p1_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_wood-=10;
                }
            resources();
            
            var a=2;
            document.body.style.cursor="url('img/timber_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_timber("+x+","+y+")");
                        }
                }
        }
    else if(tura==1 && p2_wood>=10 && cursor_free==0 && moves==1)
        {
            if(p2_wood<20 && p2_wood>=10)
                {
                    p2_wood-=10;
                    if(p2_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_wood-=10;
                }
            resources();
            
            var a=2;
            document.body.style.cursor="url('img/timber_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_timber("+x+","+y+")");
                        }
                }
        }
}

function place_timber(x,y){
    if(tura==0)
        var xy=1;
    else
        xy=2;
    if(membership[y+1][x-1]==xy && membership[y][x-1]==xy && membership[y-1][x-1]==xy && membership[y-2][x-1]==xy && membership[y-3][x-1]==xy && membership[y+1][x]==xy && membership[y][x]==xy && membership[y-1][x]==xy && membership[y-2][x]==xy && membership[y-3][x]==xy && membership[y+1][x+1]==xy && membership[y][x+1]==xy && membership[y-1][x+1]==xy && membership[y-2][x+1]==xy && membership[y-3][x+1]==xy && membership[y+1][x+2]==xy && membership[y][x+2]==xy && membership[y-1][x+2]==xy && membership[y-2][x+2]==xy && membership[y-3][x+2]==xy && membership[y+1][x+3]==xy && membership[y][x+3]==xy && membership[y-1][x+3]==xy && membership[y-2][x+3]==xy && membership[y-3][x+3]==xy && membership[y-1][x+1]==xy &&
       free_space[y+1][x-1]==0 && free_space[y][x-1]==0 && free_space[y-1][x-1]==0 && free_space[y-2][x-1]==0 && free_space[y-3][x-1]==0 && free_space[y+1][x]==0 && free_space[y][x]==0 && free_space[y-1][x]==0 && free_space[y-2][x]==0 && free_space[y-3][x]==0 && free_space[y+1][x+1]==0 && free_space[y][x+1]==0 && free_space[y-1][x+1]==0 && free_space[y-2][x+1]==0 && free_space[y-3][x+1]==0 && free_space[y+1][x+2]==0 && free_space[y][x+2]==0 && free_space[y-1][x+2]==0 && free_space[y-2][x+2]==0 && free_space[y-3][x+2]==0 && free_space[y+1][x+3]==0 && free_space[y][x+3]==0 && free_space[y-1][x+3]==0 && free_space[y-2][x+3]==0 && free_space[y-3][x+3]==0 && free_space[y-1][x+1]==0
      )
        {
            var b = x;
            var c = y;
            cursor_free--;
            document.body.style.cursor="default";
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x_y.png'>";x++;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x+1_y.png'>";x++
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x+2_y.png'>";x-=2;y--;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x_y-1.png'>";y--;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x_y-2.png'>";x++;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x+1_y-2.png'>";x++;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x+2_y-2.png'>";y++;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/timber/timber_x+2_y-1.png'>";
            
            x=b;
            y=c;
            
            num_timber[num_timber.length]=num_timber.length;
            num_timber[num_timber.length-1] = [num_timber.length,y,x];
            grow_tree[grow_tree.length]= [0,0,0,0,0,0,0,0];
            
            free_space[y][x]=1;
            free_space[y][x+1]=1;
            free_space[y][x+2]=1;
            free_space[y-1][x]=1;
            free_space[y-1][x+1]=1;
            free_space[y-1][x+2]=1;
            free_space[y-2][x]=1;
            free_space[y-2][x+1]=1;
            free_space[y-2][x+2]=1;
            
            for(var l=0;l<37;l++)
                {
                    for(var k=0;k<76;k++)
                        {
                            document.getElementById("grid"+k+"/"+l).removeAttribute("onclick","place_timber("+k+","+l+")");
                            document.getElementById("grid"+k+"/"+l).setAttribute("onclick","ccolor("+k+","+l+")");
                        }
                }
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            moves--;
        }
}

function build_barrack(){
    if(tura==0 && p1_wood>=20 && p1_iron>=20 && p1_population>=5 && cursor_free==0 && p1_barrack[0]==0 && moves==1)
        {
            if(p1_wood<30 && p1_wood>=20)
                {
                    p1_wood-=20;
                    if(p1_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_wood-=20;
                }
            resources();
            
            var a=2;
            document.body.style.cursor="url('img/barrack/barrack_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_barrack("+x+","+y+")");
                        }
                }
        }
    else if(tura==1 && p2_wood>=20 && p2_iron>=20 && p2_population>=5 && cursor_free==0 && p2_barrack[0]==0 && moves==1)
        {
            if(p2_wood<30 && p2_wood>=20)
                {
                    p2_wood-=20;
                    if(p2_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_wood-=20;
                }
            resources();
            
            var a=3;
            document.body.style.cursor="url('img/barrack/barrack_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_barrack("+x+","+y+")");
                        }
                }
        }
}

function place_barrack(x,y){
    if(tura==0)
        var xy=1;
    else
        xy=2;
    if(membership[y+1][x-1]==xy && membership[y][x-1]==xy && membership[y-1][x-1]==xy && membership[y-2][x-1]==xy && membership[y+1][x]==xy && membership[y][x]==xy && membership[y-1][x]==xy && membership[y-2][x]==xy && membership[y+1][x+1]==xy && membership[y][x+1]==xy && membership[y-1][x+1]==xy && membership[y-2][x+1]==xy && membership[y+1][x+2]==xy && membership[y][x+2]==xy && membership[y-1][x+2]==xy && membership[y-2][x+2]==xy && free_space[y+1][x-1]==0 && free_space[y][x-1]==0 && free_space[y-1][x-1]==0 && free_space[y-2][x-1]==0 && free_space[y+1][x]==0 && free_space[y][x]==0 && free_space[y-1][x]==0 && free_space[y-2][x]==0 && free_space[y+1][x+1]==0 && free_space[y][x+1]==0 && free_space[y-1][x+1]==0 && free_space[y-2][x+1]==0 && free_space[y+1][x+2]==0 && free_space[y][x+2]==0 && free_space[y-1][x+2]==0 && free_space[y-2][x+2]==0)
        {
            var b = x;
            var c = y;
            cursor_free--;
            document.body.style.cursor="default";
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/barrack/barrack_x_y.png'>";x++;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/barrack/barrack_x_y+1.png'>";y--;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/barrack/barrack_x+1_y+1.png'>";x--;
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/barrack/barrack_x+1_y.png'>";y++;
            
            x=b;
            y=c;
            
            free_space[y][x]=1;
            free_space[y][x+1]=1;
            free_space[y-1][x]=1;
            free_space[y-1][x+1]=1;
            
            for(var l=0;l<37;l++)
                {
                    for(var k=0;k<76;k++)
                        {
                            document.getElementById("grid"+k+"/"+l).removeAttribute("onclick","place_barrack("+k+","+l+")");
                            document.getElementById("grid"+k+"/"+l).setAttribute("onclick","ccolor("+k+","+l+")");
                        }
                }
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            moves--;
            if(xy==1)
                {
                    p1_barrack[0]++;
                    p1_barrack[1]=y;
                    p1_barrack[2]=x;
                }
                
            else if(xy==2)
                {
                    p2_barrack[0]++;
                    p2_barrack[1]=y;
                    p2_barrack[2]=x;
                }
                
        }
}

function build_mine(){
    if(tura==0 && p1_wood>=10 && p1_population>=3 && cursor_free==0 && moves==1)
        {
            if(p1_wood<20 && p1_wood>=10)
                {
                    p1_wood-=10;
                    if(p1_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_wood-=10;
                }
            
            if(p1_population<13 && p1_wood>=10)
                {
                    p1_population-=3;
                    if(p1_population<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_population-=3;
                }
            resources();
            
            var a=10;
            document.body.style.cursor="url('img/mine_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_mine("+x+","+y+")");
                        }
                }
        }
    else if(tura==1 && p2_wood>=10 && p2_population>=3 && cursor_free==0 && moves==1)
        {
            if(p2_wood<20 && p2_wood>=10)
                {
                    p2_wood-=10;
                    if(p2_wood<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_wood-=10;
                }
            if(p2_population<13 && p2_population>=10)
                {
                    p2_population-=3;
                    if(p2_population<10)
                        {
                            var elem = document.getElementById("amount_wood_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_wood_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_population-=3;
                }
            resources();
            
            var a=10;
            document.body.style.cursor="url('img/mine_c.cur'), auto";
            document.body.onmousedown = function() {make_cursor_free(event,a)};
            cursor_free++;
            for(var y=0;y<37;y++)
                {
                    for(var x=0;x<76;x++)
                        {
                            document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","ccolor("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","place_mine("+x+","+y+")");
                        }
                }
        }
}

function place_mine(x,y){
    if(tura==0)
        var xy=1;
    else
        xy=2;
    if(membership[y-1][x-1]==xy && membership[y-1][x]==xy && membership[y-1][x+1]==xy && membership[y][x-1]==xy && membership[y][x]==xy && membership[y][x+1]==xy && membership[y+1][x-1]==xy && membership[y+1][x]==xy && membership[y+1][x+1]==xy && iron_ore[y][x]==1)
        {
            var b = x;
            var c = y;
            cursor_free--;
            document.body.style.cursor="default";
            document.getElementById("grid"+x+"/"+y).innerHTML="<img src='img/mine.png'>";

            
            for(var l=0;l<37;l++)
                {
                    for(var k=0;k<76;k++)
                        {
                            document.getElementById("grid"+k+"/"+l).removeAttribute("onclick","place_barrack("+k+","+l+")");
                            document.getElementById("grid"+k+"/"+l).setAttribute("onclick","ccolor("+k+","+l+")");
                        }
                }
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            moves--;
            if(xy==1)
                {
                    p1_mines++;
                }
                
            else if(xy==2)
                {
                    p2_mines++;
                }
                
        }
}

function make_cursor_free(event,a,c,b){
    if(event.button==2 && cursor_free!=0)
        {
            cursor_free--;
            document.body.style.cursor="default";
            
            //      A 1
            {if(tura==0 && a==1 && p1_wood<10)
                {
                    p1_wood+=5;
                    if(p1_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==0 && a==1)
                {
                    p1_wood+=5;
                }
            if(tura==1 && a==1 && p2_wood<10)
                {
                    p2_wood+=5;
                    if(p2_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==1 && a==1)
                {
                    p2_wood+=5;
                }
            }
            
            //      A 2
            {
                if(tura==0 && a==2 && p1_wood<10)
                {
                    p1_wood+=10;
                    if(p1_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==0 && a==2)
                {
                    p1_wood+=10;
                }
            if(tura==1 && a==2 && p2_wood<10)
                {
                    p2_wood+=10;
                    if(p2_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==1 && a==2)
                {
                    p2_wood+=10;
                }
            }
            
            //      A 3
            {
                if(tura==0 && a==3 && p1_wood<30)
                {
                    p1_wood+=20;
                    if(p1_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==0 && a==3)
                {
                    p1_wood+=20;
                }
            if(tura==1 && a==3 && p2_wood<30)
                {
                    p2_wood+=20;
                    if(p2_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==1 && a==2)
                {
                    p2_wood+=20;
                }
            }
            
            //      A 4
            {
                if(a==4)
                {
                    
                }
                    
            }
            
            //      A 10
            {
                if(tura==0 && a==10 && p1_wood<10)
                {
                    p1_wood+=10;
                    if(p1_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==0 && a==10)
                {
                    p1_wood+=10;
                }
            if(tura==1 && a==10 && p2_wood<10)
                {
                    p2_wood+=10;
                    if(p2_wood>=10)
                        {
                            var amount_wood_dozens = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_dozens);
                            amount_wood_dozens.setAttribute('id', 'amount_wood_dozens');
                            amount_wood_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("wood").appendChild(amount_wood_hundreds);
                            amount_wood_hundreds.setAttribute('id', 'amount_wood_hundreds');
                            amount_wood_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==1 && a==10)
                {
                    p2_wood+=10;
                }
                if(tura==0 && a==10 && p1_population<10)
                {
                    p1_wood+=3;
                    if(p1_population>=10)
                        {
                            var amount_population_dozens = document.createElement("div");
                            document.getElementById("population").appendChild(amount_population_dozens);
                            amount_population_dozens.setAttribute('id', 'amount_population_dozens');
                            amount_population_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_population_hundreds = document.createElement("div");
                            document.getElementById("population").appendChild(amount_population_hundreds);
                            amount_population_hundreds.setAttribute('id', 'amount_population_hundreds');
                            amount_population_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==0 && a==10)
                {
                    p1_population+=3;
                }
            if(tura==1 && a==10 && p2_population<10)
                {
                    p2_population+=3;
                    if(p2_population>=10)
                        {
                            var amount_population_dozens = document.createElement("div");
                            document.getElementById("population").appendChild(amount_population_dozens);
                            amount_population_dozens.setAttribute('id', 'amount_population_dozens');
                            amount_population_dozens.setAttribute('class', 'number_resources');
                            
                            var amount_wood_hundreds = document.createElement("div");
                            document.getElementById("population").appendChild(amount_population_hundreds);
                            amount_population_hundreds.setAttribute('id', 'amount_population_hundreds');
                            amount_population_hundreds.setAttribute('class', 'number_resources');
                        }
                }
            else if(tura==1 && a==10)
                {
                    p2_population+=3;
                }
            }
            
            for(var y=0;y<37;y++)
                    {
                        for(var x=0;x<76;x++)
                        {
                            if(a==1)
                                document.getElementById("grid"+x+"/"+y).removeAttribute("onclick","place_house("+x+","+y+")");
                            document.getElementById("grid"+x+"/"+y).setAttribute("onclick","ccolor("+x+","+y+")");
                        }
                    }
            czyszczenie_zasiegu(a,c,b);
            resources();
        }
}

//      ARMIA

function made_light(){
    if(tura==0 && p1_iron>=5 && cursor_free==0 && p1_population>=1 && p1_barrack[0]!=0 && moves==1)
        {
            if(p1_population==10)
                {
                    p1_population--;
                    if(p1_population<10)
                        {
                            var elem = document.getElementById("amount_population_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_population_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_population--;
                }
            
            if(p1_iron>=10 && p1_iron<15)
                {
                    p1_iron-=5;
                    if(p1_iron<10)
                        {
                            var elem = document.getElementById("amount_iron_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_iron_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_iron-=5;
                }
            resources();
            
            moves--;
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            soldier[soldier.length]=new Array(8);
            soldier[soldier.length-1][0]=soldier.length-1;
            soldier[soldier.length-1][1]=1;
            soldier[soldier.length-1][2]=2;
            soldier[soldier.length-1][3]=1;
            soldier[soldier.length-1][4]=1;
            soldier[soldier.length-1][5]=0;
            soldier[soldier.length-1][6]=0;
            soldier[soldier.length-1][7]=0;
            
            if(army_free[p1_barrack[1]+1][p1_barrack[2]]==0)
                {
                    var y=p1_barrack[1]+1;
                    var x=p1_barrack[2];

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]+1][p1_barrack[2]+1]==0)
                {
                    var y=p1_barrack[1]+1;
                    var x=p1_barrack[2]+1;

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]][p1_barrack[2]+2]==0)
                {
                    var y=p1_barrack[1];
                    var x=p1_barrack[2]+2;

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]-1][p1_barrack[2]+2]==0)
                {
                    var y=p1_barrack[1]-1;
                    var x=p1_barrack[2]+2;

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]-2][p1_barrack[2]+1]==0)
                {
                    var y=p1_barrack[1]-2;
                    var x=p1_barrack[2]+1;

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]-2][p1_barrack[2]]==0)
                {
                    var y=p1_barrack[1]-2;
                    var x=p1_barrack[2];

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]-1][p1_barrack[2]-1]==0)
                {
                    var y=p1_barrack[1]-1;
                    var x=p1_barrack[2]-1;

                    born_light(x,y);
                }
            else if(army_free[p1_barrack[1]][p1_barrack[2]-1]==0)
                {
                    var y=p1_barrack[1];
                    var x=p1_barrack[2]-1;

                    born_light(x,y);
                }
        }
    
    
    else if(tura==1 && p2_iron>=5 && cursor_free==0 && p2_population>=1 && p2_barrack[0]!=0 && moves==1)
        {
            if(p2_population==10)
                {
                    p2_population--;
                    if(p2_population<10)
                        {
                            var elem = document.getElementById("amount_population_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_population_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_population--;
                }
            
            if(p2_iron>=10 && p2_iron<15)
                {
                    p2_iron-=5;
                    if(p2_iron<10)
                        {
                            var elem = document.getElementById("amount_iron_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_iron_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_iron-=5;
                }
            resources();
            
            moves--;
            document.getElementById("pts_fields").innerHTML = "<img src='img/movess_0_1.png' id='moves'>";
            soldier[soldier.length]=new Array(7);
            soldier[soldier.length-1][0]=soldier.length-1;
            soldier[soldier.length-1][1]=1;
            soldier[soldier.length-1][2]=2;
            soldier[soldier.length-1][3]=1;
            soldier[soldier.length-1][4]=2;
            soldier[soldier.length-1][5]=0;
            soldier[soldier.length-1][6]=0;
            soldier[soldier.length-1][7]=0;
            
            if(army_free[p2_barrack[1]+1][p2_barrack[2]]==0)
                {
                    var y=p2_barrack[1]+1;
                    var x=p2_barrack[2];

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]+1][p2_barrack[2]+1]==0)
                {
                    var y=p2_barrack[1]+1;
                    var x=p2_barrack[2]+1;

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]][p2_barrack[2]+2]==0)
                {
                    var y=p2_barrack[1];
                    var x=p2_barrack[2]+2;

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]-1][p2_barrack[2]+2]==0)
                {
                    var y=p2_barrack[1]-1;
                    var x=p2_barrack[2]+2;

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]-2][p2_barrack[2]+1]==0)
                {
                    var y=p2_barrack[1]-2;
                    var x=p2_barrack[2]+1;

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]-2][p2_barrack[2]]==0)
                {
                    var y=p2_barrack[1]-2;
                    var x=p2_barrack[2];

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]-1][p2_barrack[2]-1]==0)
                {
                    var y=p2_barrack[1]-1;
                    var x=p2_barrack[2]-1;

                    born_light(x,y);
                }
            else if(army_free[p2_barrack[1]][p2_barrack[2]-1]==0)
                {
                    var y=p2_barrack[1];
                    var x=p2_barrack[2]-1;

                    born_light(x,y);
                }
            
        }
    
    
}

function born_light(x,y){
                    var light = document.createElement("div");
                    document.body.appendChild(light);
                    light.setAttribute('class', 'light');
                    light.setAttribute('id',"light"+x+"/"+y);
                    document.getElementById("light"+x+"/"+y).innerHTML = "<img src='img/army/p"+soldier[soldier.length-1][4]+"_light_mini.png'>";
                    var margintop=y*25; 
                    var marginleft=x*25;
                    document.getElementById("light"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("light"+x+"/"+y).style.left = marginleft+"px";
    
                    var life=document.createElement("div");
                    document.body.appendChild(life);
                    life.setAttribute('class', 'life');
                    life.setAttribute('id',"life"+x+"/"+y);
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_2.png'>";
                    document.getElementById("life"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("life"+x+"/"+y).style.left = marginleft+"px";
                    lifes[lifes.length]=new Array(3);
                    lifes[lifes.length-1][0]=lifes.length-1;
                    lifes[lifes.length-1][1]=x;
                    lifes[lifes.length-1][2]=y;
    
                    var move=document.createElement("div");
                    document.body.appendChild(move);
                    move.setAttribute('class', 'move');
                    move.setAttribute('id',"move"+x+"/"+y);
                    document.getElementById("move"+x+"/"+y).innerHTML = "<img src='img/life/move_1.png'>";

                    document.getElementById("move"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("move"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("life"+x+"/"+y).setAttribute("onclick","move_light("+x+","+y+")");
                    
                    army_free[y][x]=1;
                    soldier[soldier.length-1][5]=x;
                    soldier[soldier.length-1][6]=y;
}

function move_light(x,y,attack){
    
    var t;
    for(var i=0;i<soldier.length;i++)
        {
            if(soldier[i][5]==x && soldier[i][6]==y)
                {
                    soldier[i][7]=1;
                    t=i;
                }
        }
    var p;
    var q;
    var pq;
    c=y;
    b=x;
    if(d==0)
        {
            d++;
        }
    for(var i=0;i<soldier.length;i++)
        {
            if(soldier[i][5]==x && soldier[i][6]==y && soldier[i][4]!=tura+1)
                {
                    p=Math.abs(e-x);
                    q=Math.abs(f-y);
                    pq=p+q;
                }
            if(soldier[i][5]==x && soldier[i][6]==y && soldier[i][4]!=tura+1 && ((p==0 && q==1) || (p==1 && q==0) || (p==1 && q==1)) && soldier[t][7]==1 && soldier[t][2]>0)
                {
                    attackk(x,y,e,f);
                    soldier[t][7]=0;
                }
            else
                {
                    d=0;
                }
        }
    e=x;
    f=y;
    if(cursor_free==0 && soldier[t][4]==tura+1)
        {
            sprz_x=x;
            sprz_y=y;
            y-=2;
            cursor_free++;
            a=4;
            document.body.onmousedown = function() {make_cursor_free(event,a,c,b)};
            
            zasieg[zasieg.length]=new Array(3);
            zasieg[zasieg.length-1][0]=zasieg.length-1;
            zasieg[zasieg.length-1][1]=y;
            zasieg[zasieg.length-1][2]=x;
            
            zasieg[zasieg.length]=new Array(3);
            zasieg[zasieg.length-1]=x;
            zasieg[zasieg.length-1]=y;
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x_y-2.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            y++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x_y-1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            x--;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x-1_y-1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            y++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x-1_y.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            x--;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x-2_y.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            x++;y++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x-1_y+1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            x++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x_y+1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            y++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x_y+2.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            y--;x++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x+1_y+1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            y--;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x+1_y.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            x++;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x+2_y.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            x--;y--;

            rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x+1_y-1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_light("+x+","+y+","+b+","+c+")");
            sprzatanie=1;
        }

}

function place_light(x,y,b,c){
    var IDs=0;
    
            for(var i=0;i<soldier.length;i++)
                {
                    if(soldier[i][5]==b && soldier[i][6]==c)
                        {
                            IDs=soldier[i][0];
                        }
                }
    if(y==p1_capitol_y && x==p1_capitol_x)
        {
            var gracz = soldier[IDs][4];
            winning(gracz);
        }
    
    else if(y==p2_capitol_y && x==p2_capitol_x)
        {
            var gracz = soldier[IDs][4];
            winning(gracz);
        }
    else if(free_space[y][x]==0 && trees[y][x]==0 && army_free[y][x]==0 && waterr[y][x]==0 && mountains[y][x]==0 && soldier[IDs][3]==1 && soldier[IDs][4]==tura+1)
        {
            army_free[c][b]=0;
            army_free[y][x]=1;
            var elem = document.getElementById("light"+b+"/"+c);
                            elem.parentNode.removeChild(elem);
            elem = document.getElementById("life"+b+"/"+c);
                            elem.parentNode.removeChild(elem);
            elem = document.getElementById("move"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c++;b--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b++;c++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;b++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b--;c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);



            var light = document.createElement("div");
                            document.body.appendChild(light);
                            light.setAttribute('class', 'light');
                            light.setAttribute('id',"light"+x+"/"+y);
                            document.getElementById("light"+x+"/"+y).innerHTML = "<img src='img/army/p"+soldier[IDs][4]+"_light_mini.png'>";
                            var margintop=y*25; 
                            var marginleft=x*25;
                            document.getElementById("light"+x+"/"+y).style.top = margintop+"px";
                            document.getElementById("light"+x+"/"+y).style.left = marginleft+"px";
            
            var life=document.createElement("div");
                    document.body.appendChild(life);
                    life.setAttribute('class', 'life');
                    life.setAttribute('id',"life"+x+"/"+y);
            if(soldier[IDs][2]==3)
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_3.png'>";
            if(soldier[IDs][2]==2)
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_2.png'>";
            if(soldier[IDs][2]==1)
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_1.png'>";
                    document.getElementById("life"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("life"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("life"+x+"/"+y).setAttribute("onclick","move_light("+x+","+y+")");
            
            var move=document.createElement("div");
                    document.body.appendChild(move);
                    move.setAttribute('class', 'move');
                    move.setAttribute('id',"move"+x+"/"+y);
                    document.getElementById("move"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("move"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("move"+x+"/"+y).innerHTML = "<img src='img/life/move_0.png'>";
                    document.getElementById("move"+x+"/"+y).style.zIndex="4";
            soldier[IDs][5]=x;
            soldier[IDs][6]=y;
            soldier[IDs][3]--;
            cursor_free--;
        }
}

/*function made_heavy(){
    if(tura==0 && p1_iron>=20 && cursor_free==0 && p1_population>=1 && p1_barrack[0]!=0)
        {
            if(p1_population==10)
                {
                    p1_population--;
                    if(p1_population<10)
                        {
                            var elem = document.getElementById("amount_population_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_population_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_population--;
                }
            
            if(p1_iron>=20 && p1_iron<30)
                {
                    p1_iron-=20;
                    if(p1_iron<10)
                        {
                            var elem = document.getElementById("amount_iron_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_iron_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p1_iron-=20;
                }
            resources();
            
            soldier[soldier.length]=new Array(8);
            soldier[soldier.length-1][0]=soldier.length-1;
            soldier[soldier.length-1][1]=2;
            soldier[soldier.length-1][2]=3;
            soldier[soldier.length-1][3]=1;
            soldier[soldier.length-1][4]=1;
            soldier[soldier.length-1][5]=0;
            soldier[soldier.length-1][6]=0;
            soldier[soldier.length-1][7]=0;
            
            if(army_free[p1_barrack[1]+1][p1_barrack[2]]==0)
                {
                    var y=p1_barrack[1]+1;
                    var x=p1_barrack[2];

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]+1][p1_barrack[2]+1]==0)
                {
                    var y=p1_barrack[1]+1;
                    var x=p1_barrack[2]+1;

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]][p1_barrack[2]+2]==0)
                {
                    var y=p1_barrack[1];
                    var x=p1_barrack[2]+2;

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]-1][p1_barrack[2]+2]==0)
                {
                    var y=p1_barrack[1]-1;
                    var x=p1_barrack[2]+2;

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]-2][p1_barrack[2]+1]==0)
                {
                    var y=p1_barrack[1]-2;
                    var x=p1_barrack[2]+1;

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]-2][p1_barrack[2]]==0)
                {
                    var y=p1_barrack[1]-2;
                    var x=p1_barrack[2];

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]-1][p1_barrack[2]-1]==0)
                {
                    var y=p1_barrack[1]-1;
                    var x=p1_barrack[2]-1;

                    born_heavy(x,y);
                }
            else if(army_free[p1_barrack[1]][p1_barrack[2]-1]==0)
                {
                    var y=p1_barrack[1];
                    var x=p1_barrack[2]-1;

                    born_heavy(x,y);
                }
        }
    
    
    else if(tura==1 && p2_iron>=20 && cursor_free==0 && p2_population>=1 && p2_barrack[0]!=0)
        {
            if(p2_population==10)
                {
                    p2_population--;
                    if(p2_population<10)
                        {
                            var elem = document.getElementById("amount_population_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_population_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_population--;
                }
            
            if(p2_iron>=20 && p2_iron<30)
                {
                    p2_iron-=20;
                    if(p2_iron<10)
                        {
                            var elem = document.getElementById("amount_iron_dozens");
                            elem.parentNode.removeChild(elem);
                            
                            elem = document.getElementById("amount_iron_hundreds");
                            elem.parentNode.removeChild(elem);
                        }
                }
            else
                {
                    p2_iron-=20;
                }
            resources();
            
            soldier[soldier.length]=new Array(8);
            soldier[soldier.length-1][0]=soldier.length-1;
            soldier[soldier.length-1][1]=1;
            soldier[soldier.length-1][2]=3;
            soldier[soldier.length-1][3]=1;
            soldier[soldier.length-1][4]=2;
            soldier[soldier.length-1][5]=0;
            soldier[soldier.length-1][6]=0;
            soldier[soldier.length-1][7]=0;
            
            if(army_free[p2_barrack[1]+1][p2_barrack[2]]==0)
                {
                    var y=p2_barrack[1]+1;
                    var x=p2_barrack[2];

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]+1][p2_barrack[2]+1]==0)
                {
                    var y=p2_barrack[1]+1;
                    var x=p2_barrack[2]+1;

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]][p2_barrack[2]+2]==0)
                {
                    var y=p2_barrack[1];
                    var x=p2_barrack[2]+2;

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]-1][p2_barrack[2]+2]==0)
                {
                    var y=p2_barrack[1]-1;
                    var x=p2_barrack[2]+2;

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]-2][p2_barrack[2]+1]==0)
                {
                    var y=p2_barrack[1]-2;
                    var x=p2_barrack[2]+1;

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]-2][p2_barrack[2]]==0)
                {
                    var y=p2_barrack[1]-2;
                    var x=p2_barrack[2];

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]-1][p2_barrack[2]-1]==0)
                {
                    var y=p2_barrack[1]-1;
                    var x=p2_barrack[2]-1;

                    born_heavy(x,y);
                }
            else if(army_free[p2_barrack[1]][p2_barrack[2]-1]==0)
                {
                    var y=p2_barrack[1];
                    var x=p2_barrack[2]-1;

                    born_heavy(x,y);
                }
            
        }
    
    
}

function born_heavy(x,y){
                    var heavy = document.createElement("div");
                    document.body.appendChild(heavy);
                    heavy.setAttribute('class', 'heavy');
                    heavy.setAttribute('id',"heavy"+x+"/"+y);
                    document.getElementById("heavy"+x+"/"+y).innerHTML = "<img src='img/army/p"+soldier[soldier.length-1][4]+"_heavy_mini.png'>";
                    var margintop=y*25; 
                    var marginleft=x*25;
                    document.getElementById("heavy"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("heavy"+x+"/"+y).style.left = marginleft+"px";
    
                    var life=document.createElement("div");
                    document.body.appendChild(life);
                    life.setAttribute('class', 'life');
                    life.setAttribute('id',"life"+x+"/"+y);
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_3.png'>";
                    document.getElementById("life"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("life"+x+"/"+y).style.left = marginleft+"px";
                    lifes[lifes.length]=new Array(3);
                    lifes[lifes.length-1][0]=lifes.length-1;
                    lifes[lifes.length-1][1]=x;
                    lifes[lifes.length-1][2]=y;
    
                    var move=document.createElement("div");
                    document.body.appendChild(move);
                    move.setAttribute('class', 'move');
                    move.setAttribute('id',"move"+x+"/"+y);
                    document.getElementById("move"+x+"/"+y).innerHTML = "<img src='img/life/move_1.png'>";

                    document.getElementById("move"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("move"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("life"+x+"/"+y).setAttribute("onclick","move_heavy("+x+","+y+")");
                    
                    army_free[y][x]=1;
                    soldier[soldier.length-1][5]=x;
                    soldier[soldier.length-1][6]=y;
}

function move_heavy(x,y,attack){
    
    var t;
    for(var i=0;i<soldier.length;i++)
        {
            if(soldier[i][5]==x && soldier[i][6]==y)
                {
                    soldier[i][7]=1;
                    t=i;
                }
        }
    var p;
    var q;
    var pq;
    c=y;
    b=x;
    if(d==0)
        {
            d++;
        }
    for(var i=0;i<soldier.length;i++)
        {
            if(soldier[i][5]==x && soldier[i][6]==y && soldier[i][4]!=tura+1)
                {
                    p=Math.abs(e-x);
                    q=Math.abs(f-y);
                    alert(e+"/"+f+"/"+x+"/"+y);
                    pq=p+q;
                }
            if(soldier[i][5]==x && soldier[i][6]==y && soldier[i][4]!=tura+1 && ((p==0 && q==1) || (p==1 && q==0) || (p==1 && q==1)))
                {
                    attackk(x,y,e,f);
                }
            else
                {
                    d=0;
                }
        }
    e=x;
    f=y;
    if(cursor_free==0 && soldier[t][4]==tura+1)
        {
            sprz_x=x;
            sprz_y=y;
            y--;
            cursor_free++;
            a=4;
            document.body.onmousedown = function() {make_cursor_free(event,a,c,b)};
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/prage_x_y-1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");x--;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x-1_y-1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");y++;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/prage_x-1_y.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");y++;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/prage_x-1_y+1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");x++;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/prage_x_y+1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");x++;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x+1_y+1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");y--;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/prage_x+1_y.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");y--;
            
            var rage = document.createElement("div");
            document.body.appendChild(rage);
            rage.setAttribute('class', 'rage');
            rage.setAttribute('id',"rage"+x+"/"+y);
            document.getElementById("rage"+x+"/"+y).innerHTML = "<img src='img/rage/rage_x+1_y-1.png'>";
            var margintop=y*25; 
            var marginleft=x*25;
            document.getElementById("rage"+x+"/"+y).style.top = margintop+"px";
            document.getElementById("rage"+x+"/"+y).style.left = marginleft+"px";
            document.getElementById("rage"+x+"/"+y).setAttribute("onclick","place_heavy("+x+","+y+","+b+","+c+")");
            
            sprzatanie=1;
        }
    soldier[t][7]=0;

}

function place_heavy(x,y,b,c){
    var IDs=0;
    
            army_free[c][b]=0;
            army_free[x][y]=1;
            for(var i=0;i<soldier.length;i++)
                {
                    if(soldier[i][5]==b && soldier[i][6]==c)
                        {
                            IDs=soldier[i][0];
                        }
                }
        
if(free_space[y][x]==0 && trees[y][x]==0 && army_free[y][x]==0 && waterr[y][x]==0 && mountains[y][x]==0 && soldier[IDs][3]==1 && soldier[IDs][4]==tura+1)
        {
            var elem = document.getElementById("light"+b+"/"+c);
                            elem.parentNode.removeChild(elem);
            elem = document.getElementById("life"+b+"/"+c);
                            elem.parentNode.removeChild(elem);
            elem = document.getElementById("move"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c++;b--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b++;c++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;b++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b++;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);b--;c--;
            elem = document.getElementById("rage"+b+"/"+c);
                            elem.parentNode.removeChild(elem);



            var light = document.createElement("div");
                            document.body.appendChild(light);
                            light.setAttribute('class', 'light');
                            light.setAttribute('id',"light"+x+"/"+y);
                            document.getElementById("light"+x+"/"+y).innerHTML = "<img src='img/army/p"+soldier[IDs][4]+"_light_mini.png'>";
                            var margintop=y*25; 
                            var marginleft=x*25;
                            document.getElementById("light"+x+"/"+y).style.top = margintop+"px";
                            document.getElementById("light"+x+"/"+y).style.left = marginleft+"px";
            
            var life=document.createElement("div");
                    document.body.appendChild(life);
                    life.setAttribute('class', 'life');
                    life.setAttribute('id',"life"+x+"/"+y);
            if(soldier[IDs][2]==3)
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_3.png'>";
            if(soldier[IDs][2]==2)
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_2.png'>";
            if(soldier[IDs][2]==1)
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_1.png'>";
                    document.getElementById("life"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("life"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("life"+x+"/"+y).setAttribute("onclick","move_light("+x+","+y+")");
            
            var move=document.createElement("div");
                    document.body.appendChild(move);
                    move.setAttribute('class', 'move');
                    move.setAttribute('id',"move"+x+"/"+y);
                    document.getElementById("move"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("move"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("move"+x+"/"+y).innerHTML = "<img src='img/life/move_0.png'>";
            soldier[IDs][5]=x;
            soldier[IDs][6]=y;
            soldier[IDs][3]--;
            cursor_free--;
        }
}*/

function attackk(x,y,e,f){
    var ID=0;
    var target=0;
    var dmg=0;
    cursor_free--;
    for(var i=0;i<soldier.length;i++)
        {
            if(soldier[i][5]==e && soldier[i][6]==f)
                {
                    ID=soldier[i][0];
                }
        }
    for(var i=0;i<soldier.length;i++)
        {
            if(soldier[i][5]==x && soldier[i][6]==y)
                {
                    target=soldier[i][0];
                }
        }
    if(soldier[ID][3]==1)
        {
            if(soldier[ID][1]!=2)
                {
                    dmg=1;
                }
            else
                {
                    dmg=2;
                }
            soldier[target][2]-=dmg;
            soldier[ID][3]--;
            a=5;
            document.getElementById("move"+e+"/"+f).innerHTML = "<img src='img/life/move_0.png'>";

            if(soldier[target][2]<=0)
                {
                    var elem = document.getElementById("light"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);
                    elem = document.getElementById("life"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);
                    elem = document.getElementById("move"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);
                    
                    soldier[target][3]=0;
                    soldier[target][4]=0;
                    soldier[target][5]=0;
                    soldier[target][6]=0;
                    soldier[target][7]=0;
                }
            else
                {
                    document.getElementById("life"+x+"/"+y).innerHTML = "<img src='img/life/life_"+soldier[target][2]+".png'>";
                }
        }
    czyszczenie_zasiegu(a,e,f);
    document.body.onmousedown = function() {make_cursor_free(event,a,e,f)};
}

function czyszczenie_zasiegu(a,c,b){
    var y;
    var x;
    for(var i=0;i<zasieg.length;i++)
        {
            if(a==4)
                {
                    y=c;
                    x=b;
                }
            else if(a==5)
                {
                    y=b;
                    x=c;
                }
            else
                {
                    y=zasieg[i][1];
                    x=zasieg[i][2];
                }
            
            cursor_free=0;
            
                                    y--;
                    var elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);y--;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);y++;x--;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);y++;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);x--;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);x++;y++;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);x++;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);y++;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);y--;x++;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);y--;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);x++;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);x--;y--;
                    elem = document.getElementById("rage"+x+"/"+y);
                                    elem.parentNode.removeChild(elem);
        }
}

//      TURA

function winning(gracz){
    document.getElementById("research_window_background").style.display="block";
    document.getElementById("numer").style.fontSize="300px";
    document.getElementById("gracz").style.fontSize="100px";
    document.getElementById("wygral").style.fontSize="100px";
    if(gracz==1)
        {
            document.getElementById("numer").style.color="blue";
            document.getElementById("gracz").style.color="blue";
        }
    else
        {
            document.getElementById("numer").style.color="red";
            document.getElementById("gracz").style.color="red";
        }
    document.getElementById("numer").innerHTML=gracz;
}

function turaa(){
    first_render++;
    
    var elem = document.getElementById("amount_wood_unity");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_wood_dozens");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_wood_hundreds");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_iron_unity");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_iron_dozens");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_iron_hundreds");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_population_unity");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_population_dozens");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    var elem = document.getElementById("amount_population_hundreds");
    if (typeof elem != "undefined") 
    {
        elem.parentNode.removeChild(elem);
    }
    resourcess();
    document.getElementById("pts_fields").innerHTML = "<img src='img/movess_1_1.png' id='moves'>";
    moves=1;
    movess=1;
    document.getElementById("ptss_fields").innerHTML = "<img src='img/moves_1_1.png' id='movess'>";
    if(tura==0)
        {
            tura++;
            if(menu_army_open==1)
                {
                    menu_army_open--;
                    for(var i=0;i<aa;i++)
                    {
                        var elemm = document.getElementById("menu_fieldd_"+i);
                            elemm.parentNode.removeChild(elemm);
                    }
                }
            document.getElementById("rightarrow").innerHTML = "<img src='img/p2_menuarrow.png' id='rightarrow'>";
            sprz_y--;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_y--;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_y++;sprz_x--;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_y++;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_x--;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_x++;sprz_y++;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_x++;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_y++;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_y--;sprz_x++;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_y--;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_x++;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);sprz_x--;sprz_y--;
                    elem = document.getElementById("rage"+sprz_x+"/"+sprz_y);
                                    elem.parentNode.removeChild(elem);
            make_cursor_free();
        }

    
    
    
    
    else if(tura==1)
        {
            tura--;
            if(menu_army_open==1)
                {
                    menu_army_open--;
                    for(var i=0;i<aa;i++)
                    {
                        var elemm = document.getElementById("menu_fieldd_"+i);
                            elemm.parentNode.removeChild(elemm);
                    }
                }
            document.getElementById("rightarrow").innerHTML = "<img src='img/p1_menuarrow.png' id='rightarrow'>";
            tiktak++;
            tiktak2++;
            tiktak3++;
            tiktak7++;
            if(tiktak2%9==0)
                {
                    bigtiktak++;
                }
            if(tiktak3==3)
                {
                    p1_iron+=p1_mines;
                    p2_iron+=p2_mines;
                    tiktak3-=3;
                }
            if(tiktak7==11)
                {
                    p1_population+=num_p1_house;
                    p2_population+=num_p2_house;
                    tiktak7-=11;
                }
            if(tiktak==2)
                {
                    var currentDate = new Date();
                    var choose = currentDate.getSeconds()%8;
                    for(var i=0;i<num_timber.length;i++)
                        {
                            switch(choose)
                                {
                                    case 0:
                                        {
                                            var y=num_timber[i][1]-1;
                                            var x=num_timber[i][2];
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][0])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][0]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][0]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][0]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][0]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][0]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 1:
                                        {
                                            var y=num_timber[i][1]-2;
                                            var x=num_timber[i][2];
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][1])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][1]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][1]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][1]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][1]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][1]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 2:
                                        {
                                            var y=num_timber[i][1]-2;
                                            var x=num_timber[i][2]+1;
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][2])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][2]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][2]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][2]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][2]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][2]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 3:
                                        {
                                            var y=num_timber[i][1]-1;
                                            var x=num_timber[i][2]+1;
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][3])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][3]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][3]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][3]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][3]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][3]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 4:
                                        {
                                            var y=num_timber[i][1];
                                            var x=num_timber[i][2]+1;
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][4])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][4]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][4]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][4]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][4]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][4]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 5:
                                        {
                                            var y=num_timber[i][1]-2;
                                            var x=num_timber[i][2]+2;
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][5])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][5]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][5]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][5]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][5]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][5]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 6:
                                        {
                                            var y=num_timber[i][1]-1;
                                            var x=num_timber[i][2]+2;
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][6])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][6]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][6]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][6]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][6]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][6]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                    case 7:
                                        {
                                            var y=num_timber[i][1];
                                            var x=num_timber[i][2]+2;
                                            var a=x;
                                            var b=y;
                                            
                                            if(trees[y][x]!=1)
                                                {
                                                    switch(grow_tree[i][7])
                                                    {
                                                        case 0:
                                                            {
                                                                grow_tree[i][7]++;
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');
                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_1.png'>";
                                                            }break;

                                                            case 1:
                                                            {
                                                                grow_tree[i][7]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_2.png'>";
                                                            }break;

                                                            case 2:
                                                            {
                                                                grow_tree[i][7]++;
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                var baby_tree = document.createElement("div");
                                                                baby_tree.setAttribute('id', 'grow_tree'+x+"/"+y);
                                                                baby_tree.setAttribute('class', 'baby_tree');

                                                                document.getElementById("grid"+x+"/"+y).appendChild(baby_tree);
                                                                
                                                                document.getElementById("grow_tree"+x+"/"+y).innerHTML = "<img src='img/timber/young_tree_3.png'>";
                                                            }break;

                                                            case 3:
                                                            {
                                                                var elem = document.getElementById("grow_tree"+x+"/"+y);
                                                                elem.parentNode.removeChild(elem);
                                                                
                                                                tree(x,y);
                                                                
                                                                grow_tree[i][7]=-1;
                                                            }break;
                                                        default:
                                                            {
                                                                grow_tree[i][7]++;
                                                            }break;
                                                    }
                                                }
                                        }break;
                                }
                        }
                    tiktak=0;
                }
        for(var i=0;i<soldier.length;i++)
        {
            soldier[i][3]=1;
            soldier[i][7]=1;
            x=soldier[i][5];
            y=soldier[i][6];
            if(soldier[i][2]>0)
                {

                    var move=document.createElement("div");
                    document.body.appendChild(move);
                    move.setAttribute('class', 'move');
                    move.setAttribute('id',"move"+x+"/"+y);
                    var margintop=y*25; 
                    var marginleft=x*25;
                    document.getElementById("move"+x+"/"+y).style.top = margintop+"px";
                    document.getElementById("move"+x+"/"+y).style.left = marginleft+"px";
                    document.getElementById("move"+x+"/"+y).innerHTML = "<img src='img/life/move_1.png'>";
                    document.getElementById("move"+x+"/"+y).style.zIndex="4";
                }
            
        }
            
    {
    }
    czyszczenie_zasiegu();
    cursor_free=0;
    make_cursor_free();
    zasieg=[];
    zasieg.length=0;
            first_render++;
}
}
