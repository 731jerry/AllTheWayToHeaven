// This is used to prevent a child object from inheriting its parent's change in rotation
function FixedUpdate ()
{
	transform.rotation = Quaternion.identity;
}