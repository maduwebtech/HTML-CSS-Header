function show_menu()
{
	var a=document.getElementById('mb-menu');
	a.style.display="block";
	var b=document.querySelector('.mb-header');
	b.style.height="100vh";b.style.position="fixed";
	var c=document.querySelector('#show');
	c.style.display="none";
	var c=document.querySelector('#hide');
	c.style.display="block";
}
function hide_menu()
{
	var a=document.getElementById('mb-menu');
	a.style.display="none";
	var b=document.querySelector('.mb-header');
	b.style.height="unset";b.style.position="static";
	var c=document.querySelector('#show');
	c.style.display="block";
	var c=document.querySelector('#hide');
	c.style.display="none";
}