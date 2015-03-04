using UnityEngine;
using System.Collections;

public class FallDOwn : MonoBehaviour {

	void OnCollisionEnter2D(){
		StartCoroutine ("FallDown");
	}

	IEnumerator FallDown() {
		yield return new WaitForSeconds(0.5f);		
		rigidbody2D.isKinematic =  false;
		collider2D.isTrigger = true;
	}
}
