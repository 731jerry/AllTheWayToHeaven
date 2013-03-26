#pragma strict
var gameLevel = 0;
var gameLives = 5;
var gameScore :float = 0.0;

var increase = .1;
static var instance :GameController;

var angelPrefab :GameObject;
var ts: TunnelScroll;

function Awake()
{
	instance = FindObjectOfType(GameController);
	if(instance == null)
	{
		Debug.Log("Could not locate the Game Controller");
	}
	
}

function TimedGameRestart (timer :float, position :Vector3)
{
	yield WaitForSeconds(timer);
	var newAngel :GameObject = Instantiate(angelPrefab);
	newAngel.transform.position = position;
	
}

function Update()
{
	gameScore += Time.deltaTime;
	
	if(gameLives <= 1)
	{
		GameOver();
	}
	CheckScore();
}

function NewLevel()
{
	//var astField :AsteroidField = Camera.main.GetComponent(AsteroidField);
	//astField.GenerateLevel();
}

function GameOver()
{
	yield WaitForSeconds(1.0);
	//AddScore();
	Application.LoadLevel("main menu");
}
/*
function AddScore()
{
	HighScores.instance.AddScore(PlayerPrefs.GetString("PlayerName"), gameScore);
}
*/
function CheckScore(){
	print("gameScore: ============"+gameScore);
	
	if (gameScore > 5)
		ts.SetScrollSpeed(5.0);

}