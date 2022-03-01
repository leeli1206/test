'use strict';

angular.module("albicillaUserApp.shipments")
    .factory('DatasetsConfig', function (CUSTOMS_DATA_SOURCES, $rootScope) {
        var service = {};

        var shipIndex = $rootScope.shipIndex,
            transitIndex = $rootScope.transitIndex;

        service.basicDataArray = [{
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_AMERICA",
                "value": "IMP_AMERICA_BL_SEA",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_COSTARICA",
                "value": "IMP_COSTARICA_CD_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_MEXICO",
                "value": "IMP_MEXICO_CD_SEA",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_MEXICO_SHIPPING",
                "value": "IMP_MEXICO_CD_ALL",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PANAMA",
                "value": "IMP_PANAMA_CD_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ARGENTINA",
                "value": "IMP_ARGENTINA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_BOLIVIA",
                "value": "IMP_BOLIVIA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_BRAZIL",
                "value": "IMP_BRAZIL_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_CHILE",
                "value": "IMP_CHILE_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_COLOMBIA",
                "value": "IMP_COLOMBIA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ECUADOR",
                "value": "IMP_ECUADOR_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PARAGUAY",
                "value": "IMP_PARAGUAY_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_URUGUAY",
                "value": "IMP_URUGUAY_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PERU",
                "value": "IMP_PERU_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_VENEZUELA",
                "value": "IMP_VENEZUELA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ENGLAND",
                "value": "IMP_ENGLAND_ED_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_FRANCE",
                "value": "IMP_FRANCE_ED_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_GERMANY",
                "value": "IMP_GERMANY_ED_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_RUSSIA",
                "value": "IMP_RUSSIA_CD_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_UKRAINE",
                "value": "IMP_UKRAINE_CD_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PAKISTAN",
                "value": "IMP_PAKISTAN_BL_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_INDIA",
                "value": "IMP_INDIA_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_KOREA",
                "value": "IMP_KOREA_ED_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": false
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_JAPAN",
                "value": "IMP_JAPAN_ED_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_KAZAKHSTAN",
                "value": "IMP_KAZAKHSTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_UZBEKISTAN",
                "value": "IMP_UZBEKISTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PHILIPPINES",
                "value": "IMP_PHILIPPINES_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": false
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_SRILANKA",
                "value": "IMP_SRILANKA_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_VIETNAM",
                "value": "IMP_VIETNAM_CD_CVB",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ETHIOPIA",
                "value": "IMP_ETHIOPIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_AMERICA",
                "value": "EXP_AMERICA_BL_SEA",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_COSTARICA",
                "value": "EXP_COSTARICA_CD_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_MEXICO",
                "value": "EXP_MEXICO_CD_SEA",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PANAMA",
                "value": "EXP_PANAMA_CD_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_ARGENTINA",
                "value": "EXP_ARGENTINA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_COLOMBIA",
                "value": "EXP_COLOMBIA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_CHILE",
                "value": "EXP_CHILE_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_URUGUAY",
                "value": "EXP_URUGUAY_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_ECUADOR",
                "value": "EXP_ECUADOR_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PARAGUAY",
                "value": "EXP_PARAGUAY_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PERU",
                "value": "EXP_PERU_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_VENEZUELA",
                "value": "EXP_VENEZUELA_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_ENGLAND",
                "value": "EXP_ENGLAND_ED_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_RUSSIA",
                "value": "EXP_RUSSIA_CD_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_UKRAINE",
                "value": "EXP_UKRAINE_CD_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_INDIA",
                "value": "EXP_INDIA_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_KAZAKHSTAN",
                "value": "EXP_KAZAKHSTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PHILIPPINES",
                "value": "EXP_PHILIPPINES_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": false
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_SRILANKA",
                "value": "EXP_SRILANKA_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_VIETNAM",
                "value": "EXP_VIETNAM_CD_CVB",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_ETHIOPIA",
                "value": "EXP_ETHIOPIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_BRAZIL",
                "value": "EXP_BRAZIL_CD_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_TAIWAN",
                "value": "EXP_TAIWAN_ED_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": false,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_TAIWAN",
                "value": "IMP_TAIWAN_ED_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": false,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_KYRGYZSTAN",
                "value": "IMP_KYRGYZSTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_GUATEMALA",
                "value": "IMP_GUATEMALA_CD_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_GUATEMALA",
                "value": "EXP_GUATEMALA_CD_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ELSALVADOR",
                "value": "IMP_ELSALVADOR_BL_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_HONDURAS",
                "value": "IMP_HONDURAS_BL_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_NICARAGUA",
                "value": "IMP_NICARAGUA_BL_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_UZBEKISTAN",
                "value": "EXP_UZBEKISTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_INDONESIA",
                "value": "IMP_INDONESIA_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_INDONESIA",
                "value": "EXP_INDONESIA_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_UGANDA",
                "value": "IMP_UGANDA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_UGANDA",
                "value": "EXP_UGANDA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_KENYA",
                "value": "IMP_KENYA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PAKISTAN_SHIPPING",
                "value": "IMP_PAKISTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PAKISTAN_SHIPPING",
                "value": "EXP_PAKISTAN_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PANAMA_BL",
                "value": "IMP_PANAMA_BL_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PANAMA_BL",
                "value": "EXP_PANAMA_BL_DEF",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PANAMA_BL_ZLC",
                "value": "IMP_PANAMA_CD_ZLC",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PANAMA_BL_ZLC",
                "value": "EXP_PANAMA_CD_ZLC",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PERU_BL_SEA",
                "value": "IMP_PERU_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PERU_BL_SEA",
                "value": "EXP_PERU_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_PERU_BL_AIR",
                "value": "IMP_PERU_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_PERU_BL_AIR",
                "value": "EXP_PERU_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ECUADOR_BL_SEA",
                "value": "IMP_ECUADOR_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_ECUADOR_BL_SEA",
                "value": "EXP_ECUADOR_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_ECUADOR_BL_AIR",
                "value": "IMP_ECUADOR_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_ECUADOR_BL_AIR",
                "value": "EXP_ECUADOR_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_MEXICO_SHIPPING",
                "value": "EXP_MEXICO_CD_ALL",
                "continent": "LITERAL_NORTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_VENEZUELA_BL_SEA",
                "value": "IMP_VENEZUELA_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_VENEZUELA_BL_SEA",
                "value": "EXP_VENEZUELA_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_VENEZUELA_BL_AIR",
                "value": "IMP_VENEZUELA_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_VENEZUELA_BL_AIR",
                "value": "EXP_VENEZUELA_BL_ALL",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_URUGUAY_BL",
                "value": "IMP_URUGUAY_BL_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": false,
                "importer": true,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_URUGUAY_BL",
                "value": "EXP_URUGUAY_BL_DEF",
                "continent": "LITERAL_SOUTH_AMERICA",
                "exporter": true,
                "importer": false,
                "hscode": false,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_VIETNAM_ALL",
                "value": "IMP_VIETNAM_CD_AEN",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_VIETNAM_ALL",
                "value": "EXP_VIETNAM_CD_AEN",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_NAMIBIA",
                "value": "IMP_NAMIBIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_NAMIBIA",
                "value": "EXP_NAMIBIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_LIBERIA",
                "value": "IMP_LIBERIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_LIBERIA",
                "value": "EXP_LIBERIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_BOTSWANA",
                "value": "IMP_BOTSWANA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_BOTSWANA",
                "value": "EXP_BOTSWANA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_MOLDOVA",
                "value": "IMP_MOLDOVA_CD_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_MOLDOVA",
                "value": "EXP_MOLDOVA_CD_DEF",
                "continent": "LITERAL_EUROPE",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_BANGLADESH",
                "value": "IMP_BANGLADESH_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_BANGLADESH",
                "value": "EXP_BANGLADESH_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_CONGOKINSHASA",
                "value": "IMP_CONGOKINSHASA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_CONGOKINSHASA",
                "value": "EXP_CONGOKINSHASA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_NIGERIA",
                "value": "IMP_NIGERIA_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_CIS",
                "value": "IMP_SILKWAY_CD_DEF",
                "continent": "LITERAL_OTHERS",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_INDIA_NSW",
                "value": "IMP_INDIA_CD_UDW",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_INDIA_NSW",
                "value": "EXP_INDIA_CD_UDW",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_LESOTHO",
                "value": "IMP_LESOTHO_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_LESOTHO",
                "value": "EXP_LESOTHO_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_GSD",
                "value": "IMP_GLOBAL_BL_DEF",
                "continent": "LITERAL_OTHERS",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_IVOIRE",
                "value": "IMP_COTELVORY_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_IVOIRE",
                "value": "EXP_COTELVORY_CD_DEF",
                "continent": "LITERAL_AFRICA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_VIETNAM_APV",
                "value": "IMP_VIETNAM_CD_AVN",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_VIETNAM_APV",
                "value": "EXP_VIETNAM_CD_AVN",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_IMPORT",
                "name": "SHIPMENTS_IMP_TURKEY",
                "value": "IMP_TURKEY_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            },
            {
                "type": "SHIPMENTS_EXPORT",
                "name": "SHIPMENTS_EXP_TURKEY",
                "value": "EXP_TURKEY_CD_DEF",
                "continent": "LITERAL_ASIA",
                "exporter": true,
                "importer": true,
                "hscode": true,
                "description": true
            }
        ];
        service.shipDataArray = [{
                name: 'SHIPMENTS_SHIP_AMERICA',
                value: 'USA',
                continent: 'LITERAL_NORTH_AMERICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_BAHRAIN',
                value: 'Bahrain',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_CANADA',
                value: 'Canada',
                continent: 'LITERAL_NORTH_AMERICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_TURKEY',
                value: 'Turkey',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_MEXICO',
                value: 'Mexico',
                continent: 'LITERAL_NORTH_AMERICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_BANGLADESH',
                value: 'Bangladesh',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_INDONESIA',
                value: 'Indonesia',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_CHINA',
                value: 'China',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_INDIA',
                value: 'India',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_IRAQ',
                value: 'Iraq',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_JAPAN',
                value: 'Japan',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_KOREA',
                value: 'Korea',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_SRILANKA',
                value: 'Srilanka',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_SAUDIARABIA',
                value: 'Saudi Arabia',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_TAIWAN',
                value: 'Taiwan',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_KUWAIT',
                value: 'Kuwait',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_MALAYSIA',
                value: 'Malaysia',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_SINGAPORE',
                value: 'Singapore',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_THAILAND',
                value: 'Thailand',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_PAKISTAN',
                value: 'Pakistan',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_QATAR',
                value: 'Qatar',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_VIETNAM',
                value: 'Vietnam',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_OMAN',
                value: 'Oman',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_UNITEDARABEMIRATES',
                value: 'United Arab Emirates',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_IRAN',
                value: 'Iran',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_PHILIPPINES',
                value: 'Philipines',
                continent: 'LITERAL_ASIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_BELGIUM',
                value: 'Belgium',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_FINLAND',
                value: 'Finland',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_DENMARK',
                value: 'Denmark',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_GERMANY',
                value: 'Germany',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_ITALY',
                value: 'Italy',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_NORWAY',
                value: 'Norway',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_NETHERLANDS',
                value: 'Netherland',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_FRANCE',
                value: 'France',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_GREECE',
                value: 'Greece',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_SPAIN',
                value: 'Spain',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_ENGLAND',
                value: 'UK',
                continent: 'LITERAL_EUROPE',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_ALGERIA',
                value: 'Algeria',
                continent: 'LITERAL_AFRICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_DJIBOUTI',
                value: 'Djibouti',
                continent: 'LITERAL_AFRICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_EGYPT',
                value: 'Egypt',
                continent: 'LITERAL_AFRICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_GHANA',
                value: 'Ghana',
                continent: 'LITERAL_AFRICA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            },
            {
                name: 'SHIPMENTS_SHIP_AUSTRALIA',
                value: 'Australia',
                continent: 'LITERAL_OCEANIA',
                exporter: true,
                importer: true,
                hscode: true,
                description: true
            }
        ];
        service.transitDataArray = [{
            name: 'SHIPMENTS_TRANSIT_EURASIAN',
            value: 'EURASIAN',
            continent: '',
            exporter: true,
            importer: true,
            hscode: false,
            description: true
        }];

        service.convert = function (origin, type) {
            if (origin instanceof Array) {
                return ArrToBinary(origin, type);
            }
            var regex = new RegExp('[01]{' + origin.length + '}');
            if (regex.test(origin)) {
                return BinaryToArr(origin, type);
            }
            return null;
        };
        service.getIndex = function (dvalue) {
            return CUSTOMS_DATA_SOURCES.indexOf(dvalue);
        };
        service.hasDataset = function (dvalue) {
            var index = CUSTOMS_DATA_SOURCES.indexOf(dvalue);
            return $rootScope.$user.customs_data_source.charAt(index) === '1';
        };

        $rootScope.$user.$promise.then(function () {
            service.ownedDataSetsArray = BinaryToArr($rootScope.$user.customs_data_source);
            service.ownedDataSetsCode = ArrToBinary(service.ownedDataSetsArray);
        });


        function ArrToBinary(origin, type) {
            return origin.reduce(function (pre, data) {
                if (data.selected) {
                    if (type ? type === data.type : true) {
                        var i = CUSTOMS_DATA_SOURCES.indexOf(data.value);
                        var preAry = pre.split('');
                        preAry[i] = 1;
                        pre = preAry.join('');
                    }
                }
                return pre;
            }, '0'.repeat(CUSTOMS_DATA_SOURCES.length));
        }

        function BinaryToArr(origin, type) {
            var dataArray = _.cloneDeep(service.basicDataArray);
            dataArray.forEach(function (data) {
                if (origin.charAt(CUSTOMS_DATA_SOURCES.indexOf(data.value)) === '1') {
                    if (type ? type === data.type : true) {
                        data.selected = true;
                    }
                } else {
                    if (type ? type === data.type : true) {
                        data.selected = false;
                    }
                }
            });
            return dataArray;
        }

        service.toShipDataArr = function (origin, country) {
            var dataArray = _.cloneDeep(service.shipDataArray);
            dataArray.forEach(function (data) {
                if ((origin.charAt(shipIndex) === '1') && !(country && (country.indexOf(data.value) === -1))) {
                    data.selected = true;
                } else {
                    data.selected = false;
                }
            });
            return dataArray;
        };
        service.toTransitDataArr = function (origin) {
            var dataArray = _.cloneDeep(service.transitDataArray);
            dataArray.forEach(function (data) {
                if (origin.charAt(transitIndex) === '1') {
                    data.selected = true;
                } else {
                    data.selected = false;
                }
            });
            return dataArray;
        };

        service.isValidType = function (datasets, type) {
            if (!datasets) {
                return false;
            }
            var isSelected = function (data) {
                return datasets.charAt(CUSTOMS_DATA_SOURCES.indexOf(data.value)) === '1';
            };

            var containsType = function (data) {
                return !!data[type + 'er'];
            };

            //航运数据和过境数据
            if (datasets.charAt(transitIndex) === '1' || datasets.charAt(shipIndex) === '1') {
                return true;
            }

            return service.basicDataArray.filter(isSelected).filter(containsType).length !== 0;
        };

        // Violation of DRY pricipal, need to refactor, c&p code
        service.isHsCodeSearchAvailable = function (dataSetName, showStatus) {
            var isCountry = function (data) {
                return data.name == dataSetName;
            };

            var hsCodeAvailable = function (data) {
                return !!data['hscode'];
            };
            var result = false;
            switch (showStatus) {
                case 1:
                    result = service.basicDataArray.filter(isCountry).filter(hsCodeAvailable).length !== 0;
                    break;
                case 60:
                    result = service.shipDataArray.filter(isCountry).filter(hsCodeAvailable).length !== 0;
                    break;
                case 59:
                    result = service.transitDataArray.filter(isCountry).filter(hsCodeAvailable).length !== 0;
                    break;
            }
            return result;
        };

        service.isDescriptionSearchAvailable = function (dataSetName, showStatus) {
            var isCountry = function (data) {
                return data.name == dataSetName;
            };

            var descriptionAvailable = function (data) {
                return !!data['description'];
            };
            var result = false;
            switch (showStatus) {
                case 1:
                    result = service.basicDataArray.filter(isCountry).filter(descriptionAvailable).length !== 0;
                    break;
                case 60:
                    result = service.shipDataArray.filter(isCountry).filter(descriptionAvailable).length !== 0;
                    break;
                case 59:
                    result = service.transitDataArray.filter(isCountry).filter(descriptionAvailable).length !== 0;
                    break;
            }
            return result;
        };

        return service;
    });