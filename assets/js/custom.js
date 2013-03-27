var list = ["video games", "electronic gadgets", "board games", "things that use a remote", "card games", "internet lingo", "offensive words", "wireless things", "computer parts", "software", "websites", "game terms", "things in a grocery store", "reasons to quit your job", "things that have stripes", "tourist attractions", "diet foods", "things found in a hospital", "food/drink that is green", "weekend activities", "acronyms", "seafood", "christmas songs", "words ending in \"-n\"", "things in a grocery store", "reasons to quit your job", "things that have stripes", "tourist attractions", "diet foods", "things found in a hospital", "food/drink that is green", "weekend activities", "acronyms", "seafood", "christmas songs", "words ending in \"-n\"", "words with double letters", "children's books", "things found at a bar", "sports played indoors", "names used in songs", "foods you eat raw", "places in europe", "olympic events", "things you see at the zoo", "math terms", "animals in books or movies", "things to do at a party", "words with double letters", "children's books", "things found at a bar", "sports played indoors", "names used in songs", "foods you eat raw", "places in europe", "olympic events", "things you see at the zoo", "math terms", "animals in books or movies", "things to do at a party", "kinds of soup", "things found in new york", "things you get tickets for", "things you do at work", "foreign words used in english", "things you shouldn't touch", "spicy foods", "things at a carnival", "things you make", "places to hang out", "animal noises", "computer programs", "honeymoon spots", "things you buy for kids", "things that can kill you", "reasons to take out a loan", "words associated with winter", "things to do on a date", "historic events", "things you store items in", "things you do every day", "things you get in the mail", "things you save up to buy", "things you sit in/on", "reasons to make a phone call", "types of weather", "titles people can have", "things that have buttons", "items you take on a trip", "things that have wheels", "reasons to call 911", "things that make you smile", "ways to kill time", "things that can get you fired", "hobbies", "holiday activities", "produce", "cocktails", "seafood", "low calorie foods", "food found in a deli ", "breakfast cereals", "any green food or drink", "soft drinks", "disgusting things to eat or drink ", "hors d'oeuvres", "fried foods", "on a wine list", "words ending in \"ly\"", "nouns", "action words", "abbreviations", "foreign words", "5-letter words", "words that end in \"ing\"", "words with a double letter", "words said in anger", "adjectives", "words ending in \"ed\"", "3-letter words", "things found in the water", "gifts for the bride & groom", "tourist attractions", "reasons to call 911", "things you carry", "things from a stationary store", "reasons to quit your job", "things worn from the waist up", "things that are white", "things found in a basement cellar", "things with stripes", "things you need tickets to see", "in europe", "honeymoon spots", "cold climates", "places you wouldn't want to live", "islands", "in north america", "in your hometown", "with a high altitude", "not on planet earth", "in national geographic magazine", "fictitious places", "warm climates", "things that smell bad", "things you can see", "things you don't want to hear", "things that feel soft", "things that taste spicy", "things that smell good", "things that are red", "things you never tasted", "things that are loud", "things you shouldn't touch", "things you see in a city", "things that feel hot", "team names", "played inside", "played outside", "books, movies, or tv shows about about sports", "sports terms", "female athletes", "sporting events", "a football player's name", "a baseball player's name", "things you scream at officials", "olympic events", "athletes who do commercials", "people you admire", "last names", "people who do dangerous jobs", "couples", "people who do door to door", "nationalities", "people who work at night", "people's names used in songs", "people you aviod", "someone from your past", "titles people have", "people who work alone", "from tv, movies, or books ", "dangerous animals", "animals that swim", "four-legged animals", "things animals eat", "pets", "animals found in foreign lands", "animal noises", "at the zoo", "mascots", "animals that advertise products", "animals that fly", "italian food", "fast-food", "kinds of soup", "snacks", "food you eat raw", "food found in a casserole", "food at a carnival or fair", "health food", "canned food", "chinese food", "found in a salad bar", "mexican food", "movie stars (living)", "movie stars (dead)", "political figures", "sports personalities", "sex symbols", "newscasters/journalists", "singers", "artists", "celebrities you'd like to meet", "famous children", "stars who appear in both tv & movies", "military leaders", "cancelled tv shows", "movies on tv", "children's tv shows", "comedy shows", "long-running tv series", "shows you don't like", "things sold in commercials", "tv character names", "female stars", "male stars", "things you do while watching tv", "daytime tv shows", "math terms", "things you do in study hall", "things found in a locker", "things you study in history", "science terms", "after-school activities", "reasons to go to the principal's office", "reasons to be absent", "things in a classroom", "things you study in geography", "things you do in gym class", "things found in the cafeteria"];
			var list2 = list.slice(0);
			function generateList() {
				if (list.length <= 12) {
					alert("Ran out of items. Reinitiating list.");
					list = list2.slice(0);
					return false;
				}
				$("#categories").empty();
				//shuffle array
				fisherYates(list);
				//take first ten items
				$("#categories").append("<h3>Categories</h3><ol>");
				for (var i = 0; i < 12; i++) {
					$("#categories ol").append("<li><p>" + list[i].titleize() + "</p></li>");
					list.splice(i, 1);
				};
			}

			var counter;
			$("#starttimer").click(function() {
				$("#timer").text("120");
				clearInterval(counter);
				if ($("#dice").text() == '-') {
					$("#rolldice").trigger('click');
				}
				generateList();
				var count = 119;
				//1000 will  run it every 1 second
				counter = setInterval(timer, 1000);
				function timer() {
					$("#timer").text(count);
					if (count <= 0) {
						$.playSound('buzzer.mp3');
						clearInterval(counter);
						return;
					}
					count = count - 1;
				}

				return false;
			});
			$("#rolldice").click(function() {
				$.playSound('dice.mp3');
				var theLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "w"];
				var count = 20;
				var counter = setInterval(rolldice, 25);
				function rolldice() {
					count = count - 1;
					if (count <= 0) {
						clearInterval(counter);
						return;
					}
					var letter = theLetters[Math.floor(Math.random() * theLetters.length)];
					$("#dice").text(letter.toUpperCase());
				}

				return false;
			});
			function fisherYates(myArray) {
				var i = myArray.length;
				if (i == 0)
					return false;
				while (--i) {
					var j = Math.floor(Math.random() * (i + 1 ));
					var tempi = myArray[i];
					var tempj = myArray[j];
					myArray[i] = tempj;
					myArray[j] = tempi;
				}
			}

			String.prototype.titleize = function() {
				return this.charAt(0).toUpperCase() + this.slice(1);
			}