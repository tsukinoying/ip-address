<?php
require 'vendor/autoload.php';
use GeoIp2\Database\Reader;
$ip = $_SERVER["REMOTE_ADDR"];
$reader = new Reader('/opt/http/flag/GeoLite2-City.mmdb');
$record = $reader->city($ip);
//
//print($record->country->isoCode . "\n"); // 'US'
//print($record->country->name . "\n"); // 'United States'
//print($record->country->names['zh-CN'] . "\n"); // '美国'
//
//print($record->mostSpecificSubdivision->name . "\n"); // 'Minnesota'
//print($record->mostSpecificSubdivision->isoCode . "\n"); // 'MN'
//
//print($record->city->name . "\n"); // 'Minneapolis'
//
//print($record->postal->code . "\n"); // '55455'
//
//print($record->location->latitude . "\n"); // 44.9733
//print($record->location->longitude . "\n"); // -93.2323
//
//print($record->traits->network . "\n"); // '128.101.101.101/32'

$json=[
    "iso_code"=>$record->country->isoCode,
    "name"=>$record->country->name,
    "chs_name"=>$record->country->names['zh-CN'],
    "city"=>$record->city->name,
];
echo json_encode($json);