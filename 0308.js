<!DOCTYPE html>
<html>
<body>

<h1 id="count">0</h1>

<button onclick="add()">クリック</button>

<script>
let number = 0;

function add(){
number++;
document.getElementById("count").innerText = number;
}
</script>

</body>
</html>
