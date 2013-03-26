// How far in the distance each gate should become visible
var viewDistance : float = 50.0;
// Cached reference to the main camera
private var cam : Transform;
// Array of all the gates in the level, automatically populated
private var gates : GameObject[];

function Awake ()
{
	// Cache the reference to the camera
	cam = Camera.main.transform;
	// Fill the array of gates with all the active GameObjects that are tagged correctly
	gates = GameObject.FindGameObjectsWithTag ("GateWall");
	for (var gate : GameObject in gates)
	{
		// turn them all off
		gate.active = false;
	}
}

function Update ()
{

	// Parse through the array and make the next gate appear
	// Looping through this array each frame is not optmized.
	// As an exercise, see if you can come up with a faster way to spawn each gate
	for (var gate : GameObject in gates)
	{
		if (cam.position.z > gate.transform.position.z)
		{
			// Turn the gate off when the camera has passed it
			gate.active = false;
		}

		else if ((gate.transform.position.z - cam.position.z) < viewDistance)
		{
			// Turn the gate on when it's supposed to come in view
			gate.active = true;
		}
	}
	
}