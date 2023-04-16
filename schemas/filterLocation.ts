import { defineType, defineField } from 'sanity';

export default defineType( {
    name: 'filterLocations',
    title: 'Filter Locations',
    type: 'document',
    fields: [
        defineField({
            name: 'location',
            title: 'Location',
            description: 'Add location to be shown in filters',
            type: 'string'
        })
    ]
} )