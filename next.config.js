module.exports = {
    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "x-robots-tag",
                        value: ""
                    }
                ]
            }
        ]
    }
}