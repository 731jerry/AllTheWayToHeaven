
static var instance :HighScores;
var defaultName :String = "NoName";
private var scoresArray :Array;

function Awake ()
{
	instance = FindObjectOfType(HighScores);
	if(instance == null)
	{
		Debug.Log("Could not find the HighScores class.");
	}
	
	var hasBeenSet = PlayerPrefs.GetInt("HighscoreSet");
	if(!hasBeenSet)
	{
		Debug.Log("Resetting Highscores..");
		for(var i = 0; i < 10; i++)
		{
			var thestr = defaultName + ", "+ Random.Range( 0, 50);
			PlayerPrefs.SetString("Highscore" + i, thestr);
		}
		
		PlayerPrefs.SetInt("HighscoreSet", 1);
	}
	
}

function Start()
{
	scoresArray = new Array();
	for(var i = 0; i < 10; i++)
	{
		scoresArray.Push(PlayerPrefs.GetString("Highscore" + i));
	}
}

function SortScores()
{
/*
	var scoreA;
	var scoreB;
	var length = scoresArray.length;
	
	for(var i = 0; i < (length -1); i++)
	{
		for(var j = i +1; j <length; j++)
		{
			scoreA = GetScoreFromString(scoresArray[i]);
			scoreB = GetScoreFromString(scoresArray[j]);
		
			if((scoreA < scoreB)
			{
				Swap(i, j);
			}
		}
	}
	
	*/
	UpdatePlayerPrefs();
}

function GetScoreFromString(theString) :int
{
	//var newStr = theString.Split(", "[0]);
	//return parseInt(newStr[1]);
}

function GetNameFromString(theString) :String
{
	//var newStr = theString.Split(", "[0]);
	//return newStr[0];
}

function AddScore(name :String, score :int)
{
	var newScore = name + ", " + score;
	scoresArray.Push(newScore);
	
	SortScores();
	scoresArray.Pop();
}

function UpdatePlayerPrefs()
{
	for(var i = 0; i < 10; i++)
	{
		PlayerPrefs.SetString("Highscore" + i, scoresArray[i]);
		Debug.Log(scoresArray[i]);
	}
}

function Swap(a, b)
{
	var dummy = scoresArray[a];
	scoresArray[a] = scoresArray[b];
	scoresArray[b] = dummy;
}

function GetScore(id) :int
{
	return GetScoreFromString(scoresArray[id]);
}

function GetPlayer(id) :String
{
	return GetNameFromString(scoresArray[id]);
}