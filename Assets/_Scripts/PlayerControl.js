#pragma strict
var rotateSensitivity : float = 4.0;
var speed = 9000.0;
var controlCurve : ControlCurve;
private var rotationCurve : AnimationCurve = AnimationCurve.Linear (0,0,1,1);
private var acc : Vector3 = Vector3.zero;
private var shouldMove : boolean = true;

var asteroid: Transform;
 
var asteroidExplosion :GameObject;
var asteroidExplosionSound :AudioClip;

function Start () {

}

function Update () {

}

function FixedUpdate () 
{

	if (Input.GetKey ("up"))
        transform.Translate(0,0.2,0,Camera.main.transform);
    if (Input.GetKey ("down"))
        transform.Translate(0,-0.2,0,Camera.main.transform);
    if (Input.GetKey ("left"))
        transform.Translate(-0.2,0,0,Camera.main.transform);
    if (Input.GetKey ("right"))
        transform.Translate(0.2,0,0,Camera.main.transform);
         
            
var dir : Vector3 = Vector3.zero;
 
// we assume that device is held parallel to the ground
// and Home button is in the right hand
 
// remap device acceleration axis to game coordinates:
// 1) XY plane of the device is mapped onto XZ plane
// 2) rotated 90 degrees around Y axis
dir.x = -Input.acceleration.y;
//dir.x = rotationCurve.Evaluate (Mathf.Abs (-Input.acceleration.y));
dir.y = Input.acceleration.x;
//dir.y = rotationCurve.Evaluate (Mathf.Abs (Input.acceleration.x));
 
// clamp acceleration vector to unit sphere
if (dir.sqrMagnitude > 90)
dir.Normalize();
 
// Make it move 10 meters per second instead of 10 meters per frame...
dir *= Time.deltaTime;
 
// Move object
transform.Translate (dir * speed * speed, Camera.main.transform);
//transform.Translate (dir * rotateSensitivity, Camera.main.transform);

}

function OnTriggerEnter(other: Collider){
print(other);
Debug.Log("IN THE onTriggerEnter...............");
  if(other.tag == "Boundary"){
     //transform.Translate(Vector3(0,0,0));
     shouldMove = false;
  }
}

function OnTriggerExit(other: Collider){
print(other);
Debug.Log("IN THE onTriggerExit...............");
  if(other.tag == "Boundary"){
     shouldMove = true;
  }
}

function OnCollisionEnter(collisionInfo :Collision)
{

	var ast = collisionInfo.transform.GetComponent("Asteroid");
	if(ast != null){

		var go = Instantiate(asteroidExplosion, Vector3(transform.position.x,transform.position.y,transform.position.z+25), transform.rotation);
		var det = go.GetComponent("Detonator");
	
		AudioSource.PlayClipAtPoint(asteroidExplosionSound, transform.position, 1.0);
		Destroy(ast.gameObject);

		GameController.instance.gameLives--;
	}

}