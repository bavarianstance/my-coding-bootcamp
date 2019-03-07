 let files = [
      "ashers_first_birthday.mov",
      "ryan_asleep_at_the_computer.jpg",
      "paul_fights_a_polar_bear.mp4",
      "alex_road_rage.avi",
      "sasha_skydiving.jpeg",
      "zoe_getting_his_black_belt.png",
      "farley_winning_underground_street_race.mov",
      "its_hard_to_come_up_with_file_names.gif",
      "seriously_this_is_taking_too_long.mpg",
      "i_wonder_how_many_of_these_i_should_have.png",
      "probably_a_few_more.avi",
      "nutmeg_is_clawing_my_sneakers_again.mp4",
      "cat_i_will_destroy_you.gif",
      "i_wish_we_had_a_dog.jpeg",
      "stop_looking_at_me_like_that_nutmeg.mpeg",
      "aww_i_cant_hate_you.png",
      "omg_my_sneakers.avi",
      "cat_you_are_the_worst.mp4"
    ];

    let vidFiles = [];
    let imgFiles = [];


    const fileSort = (x) => {
      for (i = 0 ; i < x.length; i++) {
            let fileSplit = x[i].split(".");
      if (fileSplit[1] === "mov" || fileSplit[1] === "mp4" || fileSplit[1] === "avi" || fileSplit[1] === "mpeg" || fileSplit[1] === "mpg") {
       vidFiles.push(x[i]);
        } else {
            imgFiles.push(x[i]);
        }
      }
    };

    

