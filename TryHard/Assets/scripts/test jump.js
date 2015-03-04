#pragma strict


function Update () {
	if(Input.GetKey(KeyCode.Space)){
		rigidbody2D.velocity = new Vector2(0,10);
	}
}