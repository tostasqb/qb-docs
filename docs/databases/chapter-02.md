# Part II - Elasticsearch and the Elastic Stack

## Introduction

Elasticsearch (ES) began as a simple fast search engine that used to be on front of another database system such as Postgres or Mysql. It was used not to persist data but to let users search what most mattered much faster than it could be done with typical RDMS's. But time has passed and ES has evolved. It has been always pretty simple to install and begin using, so people took it and applied to projects that relied (specially) on data analytics. The database that backed up ES disappeared (for many cases) for not being needed anymore since backup and restore appeared on ES as well.

Now, ES is not just Elasticsearch, the company adopted the name Elastic and took ES to be one of their (core) products. The [Elastic Stack](https://www.elastic.co/products) is now a trend and ES is a very useful indeed. Recently they released version 5 of their products (all of them) and I think they deserve a special part in this documentation.

## Install ES

ES is a document based database, actually it's not, but let's say it is for the time being, it will be easier to understand following up the 2 databases seen before this. We haven't covered document based databases until now, this will be useful for that. Every document is like a [json object](http://www.w3schools.com/js/js_json_intro.asp) and we can query data by writing json and get data by receiving json, all of this having a REST api in the middle. But let's get started by installing ES.

- Java is required for ES to work, so do [that](https://java.com/en/download/help/index_installing.xml)!
- [Download ES zip](https://www.elastic.co/downloads/elasticsearch)
- Unzip into folder (ex: `/opt/elastic/elasticsearch`)
- Run ES with `bin/elaticsearch` inside the folder

That's it, if you go to `http://localhost:9200/` in your computes you should see something like:

    {
      "name" : "ssQ2fpa",
      "cluster_name" : "elasticsearch",
      "cluster_uuid" : "pXz5FjG9RfWiMUryRbUFmA",
      "version" : {
        "number" : "5.0.0",
        "build_hash" : "253032b",
        "build_date" : "2016-10-26T04:37:51.531Z",
        "build_snapshot" : false,
        "lucene_version" : "6.2.0"
      },
      "tagline" : "You Know, for Search"
    }

Now, how the hell am I supposed to insert data or retrieve data from ES?? Like I said, ES is API based so you'll have to POST or GET from that API. You can do that either by using curl, a programming language of your choice and/or using a third plugin like [elasticsarch-ruby](https://github.com/elastic/elasticsearch-ruby) that gives you an interface to talk to ES. Anyway, there is always something in common, the DSL...but we will leave that for after you install kibana.

## Install Kibana

[Kibana](https://www.elastic.co/products/kibana) is the frontend. The interface where you can see and interact with ES data. It is plugin based so be prepared to add to kibana pieces that are initially missing. But you have a ton of potential just by using kibana as it is. Main features like dashboarding and querying are great to get started.

- [Download Kibana zip](https://www.elastic.co/downloads/kibana)
- Unzip into folder (ex: `/opt/elastic/kibana`)
- Run kibana with `bin/kibana` inside the folder
- Open your browser in `http://localhost:5601`

This is going smoothly isn't it? It's pretty fast getting things up and running...

Now, heading back to the DSL, what is it? What is the use of it? Like in SQL you use `select * from table_name` here you'll have to know something like

    GET /_search
    {
        "query": {
            "match" : {
                "message" : "this is a test"
            }
        }
    }

In this case, we are going to use kibana for writing these querys. Click on the **Dev Tools** link of the sidebar in kibana to see what is meant.

Another very usefull thing to learn is [Lucene Query Syntax](http://www.lucenetutorial.com/lucene-query-syntax.html) and [Lucene's expression language](https://www.elastic.co/guide/en/elasticsearch/reference/5.0/modules-scripting-expression.html). Elasticsearch is based on Lucene and took that syntax to search data in multiple places around Kibana.

- [See a Kibana webinar to get to know the tools](https://www.elastic.co/webinars/getting-started-kibana/?view=1). This is a really useful video, it explains how to install and begin using kibana with X-Pack installation as well.

## Beats and Logstash

Beats are agents (processes) you install on one or multiple machines to collect data from it and deliver to ES. Elastic supports initially 4 types of beats that provides 4 types of data...

- **Filebeat** for log files
- **Metricbeat** for metrics
- **Packetbeat** for Network data
- and **Winlogbeat** for Windows event logs.

There are also many [more beats](https://www.elastic.co/guide/en/beats/libbeat/current/community-beats.html) maintained or developed by the community, that means that you could do your own! If you know any [golang](https://golang.org/)

But where does Logstash come in? Well, you could deliver all this to Logstash. Why? Because of *transformation*! You could read a datetime but only be interested in deliver the date...so that would require transforming that field after getting and before inserting...that's Logstash work.

But let's begin with beats, we will cover 3 of those 4 beats.

- Download [Metricbeat](https://www.elastic.co/downloads/beats/metricbeat),
[Packetbeat](https://www.elastic.co/downloads/beats/packetbeat) and
[filebeat](https://www.elastic.co/downloads/beats/filebeat) zips
- Unzip into respective folders (ex: `/opt/elastic/[beatname]`)
- Run each beat by entering `sudo ./[beatname] -e -c [beatname].yml` on your teminal
- Replace each [beatname] with the actual name of the beat and try again dummy!

"So this means metricbeat.yml has configuration flags I could mess with" you would say by now...and you're right! So mess with them if you dare!

**Next steps**

- Install dashboard templates for kibana based on my Beats

For this, you can run a script inside each beat. In metricbeat you can run `./import_dashboards` from the `scripts` folder.

## X-Pack

X-Pack provides, among other things, security to the Elastic Stack and data. Is like having a login to your postgresql database but in a separate component and completely optional.

Follow the steps from the X-Pack [download page](https://www.elastic.co/downloads/x-pack) and you'll be fine.

## Project

Create your Elastic stack with Elasticsearch, Kibana and beats so that you could see in kibana a dashboard graphic about the [uptime](https://en.wikipedia.org/wiki/Uptime) for Amazon.com.
