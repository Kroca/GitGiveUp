#pragma strict

var howfast:float;
private var direction : Vector2;
private var here: Transform;
private var hhere : Vector2;
function Start(){
	
	here = GameObject.Find("target").transform;
	hhere = here.position;
	
	direction = hhere - transform.position;
}
function FixedUpdate () {	
	direction.Normalize();
	rigidbody2D.velocity = direction*Time.deltaTime*howfast;
			
		//transform.position = Vector2.MoveTowards(transform.position,direction , howfast);
	}
	
function OnCollisionEnter2D(obj : Collision2D){
	Destroy(gameObject);
}
