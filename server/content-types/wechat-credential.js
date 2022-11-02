module.exports = {
    "kind": "singleType",
    info: {
        "displayName": "WeChat Credentials",
        "singularName": "wechat-credential",
        "pluralName": "wechat-credentials",
        "description": "Stores WeChat Mini program credentials",
        "tableName": "wechat_auth_creds",
    },
    options: {
        "privateAttributes": ["id", "created_at"],
        "populateCreatorFields": true,
        "draftAndPublish": true
    },
    pluginOptions: {
        "content-manager": {
            "visible": true
        },
        "content-type-builder": {
            "visible": true
        }
    },
    attributes: {
        "app_id": {
            "type": "string",
            "configurable": true,
            "required": true,
            "default": null
        },
        "app_secret": {
            "type": "string",
            "configurable": true,
            "required": true,
            "default": null
        }
    }
}