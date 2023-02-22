import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'configuration',
    title: 'Configuration',
    type: 'document',
    fields: [
    defineField({
        name:  'configuration',
        title:  'Configuration',
        type: 'number',
        description: 'in BHK'
    }),
    defineField({
        name:  'configurationType',
        title:  'Type',
        type: 'string',
        description: 'Compact/ Standard/ XL /...'
    }),
    defineField({
        name: 'carpetArea',
        title: 'Carpet-Area',
        type: 'number',
    }),
    defineField({
        name:  'configurationPrice',
        title:  'Price',
        type: 'string',
        description: 'Price per config, Eg: 2.13cr'
    }),
    ]
})