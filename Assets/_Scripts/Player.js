// Player state tracking and logic

private var hitWall : boolean = false;
private var totalGates : int = 0;
private var successGates : int = 0;
private var failureGates : int = 0;

function DetermineGateSuccess ()
{
	if (hitWall)
	{
		failureGates++;
	}
	else
	{
		successGates++;
	}
	hitWall = false;
}

function IncreaseGateCount ()
{
	totalGates++;
}

function HitWall ()
{
	hitWall = true;
}

function OnGUI ()
{
	GUILayout.Label ("Total Gates: " + totalGates);
	GUILayout.Label ("Cleared Gates: " + successGates);
	GUILayout.Label ("Failed Gates: " + failureGates);
}