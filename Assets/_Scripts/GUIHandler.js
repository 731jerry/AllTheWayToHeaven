var scoreTickTime = .05;
var scoreObject :GameObject;

var livesArray :GameObject[];

private var prevTick = 0.0;
var tickClip :AudioClip;


function Update ()
{
	UpdateLives(GameController.instance.gameLives);

	AddGUIScore(GameController.instance.gameScore);

}

function UpdateLives(nLives :int)
{
	for(var i = 0; i < (livesArray.length - nLives); i++)
	{
		livesArray[i].renderer.enabled = false;
	}
}


function CheckGUIScore() :float
{
	if(scoreObject)
	{
		var textMesh :TextMesh = scoreObject.GetComponent(TextMesh);
		return parseFloat(textMesh.text);
	}
}

function AddGUIScore(nScore :float)
{
	if(scoreObject)
	{
		var textMesh :TextMesh = scoreObject.GetComponent(TextMesh);

		textMesh.text = nScore.ToString("f2");
	}
	
	//yield WaitForSeconds(3.0);
	AudioSource.PlayClipAtPoint(tickClip, Camera.main.transform.position, .25);
}