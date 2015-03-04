using UnityEngine;
using System.Collections;

public class DeathScript : MonoBehaviour {
	public GameObject Blood;

	void Start(){
		StartCoroutine ("Destroy");
		rigidbody.velocity=new Vector3 (Random.Range (-2.0F, 2.0F), Random.Range (-2.0f, 2.0F), 0.0f);;
	}

	void Update(){
		Instantiate (Blood, transform.position, transform.rotation);
	}

	IEnumerator Destroy() {
		yield return new WaitForSeconds(0.5f);

		Destroy (gameObject);
	}
}
