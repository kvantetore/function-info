{
    "targets": [
        {
            "target_name": "functionInfo",
            "sources": [
                "src/functionInfo.cc"
            ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
