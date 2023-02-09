import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'totalConfiguration',
    title: 'TotalConfiguration',
    type: 'document',
    fields: [
    defineField({
        name:  'configuration',
        title:  'Configuration',
        type: 'number',
        description: 'in BHK'
    }),
    defineField({
        name: 'carpetArea',
        title: 'Carpet-Area',
        type: 'number',
    })
    ]
})