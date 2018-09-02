	var keyStat = document.getElementById("t1");
		var t2 = document.getElementById("t2");
		t2.readOnly = true;//t2框设置只读
		keyStat.onkeydown = function(event){
			var num = event.keyCode;
			keyStat.setSelectionRange(0,1)//设置默认被选中的字符.
			t2.value = num;
			if (event.keyCode == 13) {
				alert("你按下了回车键!")
				
			} else{
				
			}
		}