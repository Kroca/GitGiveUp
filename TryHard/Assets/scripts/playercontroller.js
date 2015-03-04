#pragma strict

private var pognali : Vector3;
var speed: float;
private var moveVer: float;
private var groundedL : boolean;
private var groundedR : boolean;
var posiL : Transform ;
var posiR : Transform;
var gLayer : LayerMask;
var djump : boolean = false;
var level : int ;
var CurLevel : int;
var JumpH :  float ;
private var facingRight: boolean = true;
private var anim : Animator;
private var grounded : boolean;

function Start(){
		anim = GetComponent(Animator);
	}

function FixedUpdate () {
	groundedL = Physics2D.OverlapPoint(posiL.position,gLayer);
	groundedR = Physics2D.OverlapPoint(posiR.position,gLayer);
	
	
	if ((groundedL == true) || (groundedR == true)){
		djump = false;
		grounded = true;
		//Debug.Log(grounded);	
	}
		else {
		grounded = false;
		}
	
	anim.SetFloat("Speed",Mathf.Abs(controllerv2.moveHor));
	anim.SetBool("Ground",grounded);
	anim.SetFloat("VSpeed",rigidbody2D.velocity.y);
	
	
	
	rigidbody2D.velocity = new Vector2 (controllerv2.moveHor*speed*Time.deltaTime, rigidbody2D.velocity.y);
	
	
	if (controllerv2.moveHor>0 && !facingRight)
		Flip();
	else if (controllerv2.moveHor<0 && facingRight)
		Flip();
		

	if (( (groundedL || groundedR) || !djump) && (controllerv2.canjump == true)){
			controllerv2.canjump = false;
			rigidbody2D.velocity = new Vector2(0,JumpH);
		if (!(groundedL || groundedR) && !djump )
			djump = true;
		}
		
}


function OnTriggerEnter2D(other : Collider2D){
	if (other.gameObject.tag == "Finish")
		Application.LoadLevel(Application.loadedLevel + 1);
	else if(other.gameObject.tag == "Die")
		Application.LoadLevel(Application.loadedLevel);
	}
		

function Flip(){
	facingRight = !facingRight;
	var  theScale : Vector2 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;
	
		}		





