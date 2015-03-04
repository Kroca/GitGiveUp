#pragma strict

private var i : int;
private var z : int;


static var moveHor : float;
static var canjump : boolean = false ;
private var startpos : float;


function Update () {
	if ( Input.touchCount > 0 ){
		for ( i = 0 ; i < Input.touchCount; i++){
			var t : Touch = Input.GetTouch(i);
			var realpos = Camera.main.ScreenToWorldPoint(new Vector3(t.position.x , t.position.y,10));
				//Debug.Log(realpos.x);
			if (realpos.x < -5.2f )
				moveHor = -2;
			if (((-5.2f)< realpos.x) && (realpos.x < 1) )
				moveHor = 2;

			if (t.phase == TouchPhase.Began)
				if (realpos.x > 1){
					canjump = true;
				}
			if (/*t.phase == TouchPhase.Canceled||*/ t.phase == TouchPhase.Ended)
				canjump = false;


			}
		}

	else { 
		moveHor = 0f;
	}
//Debug.Log(Input.touchCount);
//if (Input.GetKey(KeyCode.Space))
//canjump=true;
//moveHor = Input.GetAxis("Horizontal")*2;


}