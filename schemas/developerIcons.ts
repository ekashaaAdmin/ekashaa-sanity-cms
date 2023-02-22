import {defineField, defineType} from 'sanity'

export default defineType({ 
    name: 'developerIcons',
    title: 'Developer Icons',
    type: 'document',
    fields: [
        defineField({
            name:  'logo',
            title:  'DeveloperIcons',
            type: 'image',
            description: 'This is for developer grid at the home page'
        }),
        defineField({
            name:  'developerIconName',
            title:  'Developer- Name',
            type: 'string'
        })
    ]
})