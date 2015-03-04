using UnityEngine;
using System.Collections;

public class button : MonoBehaviour {

	void OnGUI() {


		if (GUI.Button (new Rect (Screen.width/2-50, Screen.height/3, 100, 50), "RESTART GAME"))
			Application.LoadLevel (0);
		
	}
}
