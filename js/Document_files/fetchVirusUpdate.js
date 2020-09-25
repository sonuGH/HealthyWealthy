$(document).ready(function () {

    $("#covidLink").click(async () => {

        // download the data
        console.log("Report: Download Started");
        var url = "https://api.covid19api.com/summary";
        var res = await fetch(url);
        var report = await res.json();
        console.log(report);
        location.href = "../htmlFiles/covidStatusUpdate.html";

        // clear the table for updating
        $('table tbody').empty();

        // hide the table for hidden initialize
        $('table').hide();

        //   // set the last updated time
        // $('#last_updated').text(moment.utc(report.last_updated).fromNow());

        // get the world countries list
        var countries_list = report.Countries;
        //var world_list = world.list;

        // loop over every country
        for (var i in countries_list) {
            var country_dtls = countries_list[i];

            // replace -1 with unknown
            for (var o in country_dtls) {
                if (country_dtls[o] == -1) country_dtls[o] = 'Unknown';
            }

            //   // set the totals
            //   for(var o in world.TotalConfirmed){
            //     $(`#total_${o}`).text(world.totals[o].commaSplit());
            //   }

            // add the country to the table
            $('table tbody').append(`
        <tr>
            <td>${country_dtls.country}</td>
            <td>${country_dtls.TotalConfirmed.commaSplit()}</td>
            <td>${country_dtls.TotalDeaths.commaSplit()}</td>
            <td>${country_dtls.TotalRecovered.commaSplit()}</td>
        </tr>`);
        }

        // show the table so datatables doesn't die
        $('table').show();

        // // init the data table
        // if(!datatable)datatable = $('table').DataTable({
        //   paging:false,
        //   searching:false,
        //   info:false,
        //   columnDefs: [
        //      {type:'formatted-num',targets:[1,2,3]}
        //   ]
        // });

        // // sort the table by confirmed cases
        // datatable.order([1, 'desc']).draw();

        // // hide the loading icon
        //   $('#loader').hide();
        // };

        // // store last updated date
        // var old_last_updated;

        // // check for the last update
        // var update_check = async()=>{
        // console.log('Checking for updates');
        // var res = await fetch('https://cov19.cc/last_updated.txt');
        // var last_updated = await res.text();

        // // if the last updated date is newer than the stored last updated date then update the variable and update the table with the new data
        // if(old_last_updated == last_updated)return;
        // old_last_updated = last_updated;

        // update();
        // };

        // // initialize
        // update_check();

        // // check for updates every 60 seconds
        // setInterval(update_check,60000);


    });


});



