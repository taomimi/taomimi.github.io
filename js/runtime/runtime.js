<span id="momk"></span><span id="momk" style="color: #ff0000;"></span>
            <script type="text/javascript">
            function NewDate(str) {
            str = str.split('-');
            var date = new Date();
            date.setUTCFullYear(str[0], str[1] - 1, str[2]);
            date.setUTCHours(0, 0, 0, 0);
            return date;
            }
            function momxc() {
            var birthDay =NewDate("2022-08-25");
            var today=new Date();
            var timeold=today.getTime()-birthDay.getTime();
            var sectimeold=timeold/1000
            var secondsold=Math.floor(sectimeold);
            var msPerDay=24*60*60*1000; var e_daysold=timeold/msPerDay;
            var daysold=Math.floor(e_daysold);
            var e_hrsold=(daysold-e_daysold)*-24;
            var hrsold=Math.floor(e_hrsold);
            var e_minsold=(hrsold-e_hrsold)*-60;
            var minsold=Math.floor((hrsold-e_hrsold)*-60); var seconds=Math.floor((minsold-e_minsold)*-60).toString();
            document.getElementById("momk").innerHTML = "service居然运行了："+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒"+"❤️";
            setTimeout(momxc, 1000);
            }momxc();
            </script>
            <style>
            #momk{animation:change 10s infinite;font-weight:800; }
            @keyframes change{0%{color:#5cb85c;}25%{color:#556bd8;}50%{color:#e40707;}75%{color:#66e616;}100% {color:#67bd31;}}
            </style>
