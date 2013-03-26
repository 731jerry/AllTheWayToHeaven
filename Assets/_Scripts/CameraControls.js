var rotateSensitivity : float = 4.0;
var moveSpeed : float = 30.0;
var controlCurve : ControlCurve;
private var rotationCurve : AnimationCurve = AnimationCurve.Linear (0,0,1,1);
private var acc : Vector3 = Vector3.zero;
var particle : GameObject;

function Awake ()
{
	// In order to make the feel of the player controls
	// consistent in all levels, we set this property in awake.
	// This way, each level's instance of the camera can inherit response
	// curve that has been set up in the Prefab called "Control Curve"
	
	// Note: To edit the master response curve, select the
	// "ControlCurve" Prefab in the Resources folder, and
	// select GameObject->Edit Response Curves from the menubar
	rotationCurve = controlCurve.controlCurve;
	
	// Set iPhone to widescreen mode
	iPhoneSettings.screenOrientation = iPhoneScreenOrientation.LandscapeLeft;
}

function Update () 
{
	// Move the camera and children forward
	moveSpeed = moveSpeed+GameController.instance.gameScore/200;
	transform.Translate (0,0, Time.deltaTime * moveSpeed);
	print("speed: "+moveSpeed);
	TouchHandler();
}

function TouchHandler (){

for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Began) {
			// Construct a ray from the current touch coordinates
			var ray = Camera.main.ScreenPointToRay (touch.position);
			print("::::");
			if (Physics.Raycast (ray)) {
				// Create a particle if hit
				Instantiate (particle, transform.position, transform.rotation);
				print("==========");
				print("touch position:"+touch.position);

			}
		}
	}
	
}