#pragma strict
var here : Transform;
var shot : GameObject;
var shotSpawn : GameObject;
var nextf : float;
private var firecd : float = 0.5f;
function FixedUpdate () {
		var hit : RaycastHit2D = Physics2D.Raycast(transform.position , (new Vector2(here.position.x,(here.position.y)-4.0f))*2.0f);
		Debug.DrawRay(transform.position , (new Vector2(here.position.x,(here.position.y)-4.0f))*2.0f);	
	if ((Mathf.Abs(here.position.x) < transform.position.x + 14) && ( hit.collider.tag == "Player")){
			transform.LookAt(here);
			if(Time.time > nextf){
			nextf = Time.time + firecd;
			Instantiate(shot, shotSpawn.transform.position,  shotSpawn.transform.rotation);

		}
}
}