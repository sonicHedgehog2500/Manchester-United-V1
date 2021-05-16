	/*
	 * Displays A Maintenance Message
	 */
	function maintenanceAlert(){
		alert("This content is currently undergoing maintenance and will be available soon.");
	}
	
	/*
	 * Displays The Disclaimer
	 */
	function viewDisclaimer(){
		alert("This site has been constructed as coursework for module U08054 Web Technology, at Oxford Brookes University. It is not a working website and is not connected with any site or individual referenced. The views and opinions expressed within these pages are personal and should not be construed as reflecting the views and opinions of Oxford Brookes University.");
	}
	
	/*
	 * Narrows Down Fixtures Table Based On A Given Input Of Team Name
	 */
	function searchFixtures(){
		var input, filter, table, tr, td, text_value;
		input = document.getElementById("fixtures-search-bar");
		filter = input.value.toUpperCase();
		table = document.getElementById("fixtures-table");
		tr = table.getElementsByTagName("tr");

		for (var index_position = 0; index_position < tr.length; index_position++){
			td = tr[index_position].getElementsByTagName("td")[0];
			
			if (td){
				text_value = td.textContent || td.innerText;

				if (text_value.toUpperCase().indexOf(filter) > -1){
					tr[index_position].style.display = "";
				} 
				else{
					tr[index_position].style.display = "none";
				}
			}
		}
	}