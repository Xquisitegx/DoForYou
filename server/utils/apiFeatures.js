module.exports = class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        // 1A) Filtering
        const queryObject = {...this.queryString};
        const excludedFields = ["page", "sort", "limit", "fields"];
        excludedFields.forEach(element => delete queryObject[element]);

        // 2A) Advanced Filtering
        if (Object.keys(queryObject).length === 0) { return this; }

        let findObject = {};
        if (queryObject.category && queryObject.category !== []) {
            findObject.category = { $in: queryObject.category.split(',') }
        }
        if (queryObject.search !== "") {
            findObject.$text = { $search: queryObject.search }
        }

        //const tours = await Tour.find().where("duration").equals(5).where("difficulty").equals("easy");
        this.query = this.query.find(findObject);

        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort("-_id");
        }
        
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }

        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}