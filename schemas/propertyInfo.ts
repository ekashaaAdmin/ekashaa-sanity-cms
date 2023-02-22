import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'property',
    title: 'Property-Information',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Property Name',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'projectInfo',
        title: 'Project Info',
        type: 'object',
        fields: [
          defineField ({
            name: 'projectStatus',
            title: 'Project Status',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField ({
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField ({
            name: 'totalFloor',
            title: 'Total Floors',
            type: 'number'
          }),
          defineField ({
            name: 'plotArea',
            title: 'Plot Area',
            type: 'number',
            description: 'Please enter area in SqFt',
            placeholder: 'Area in SqFt' 
          }),
          defineField ({
            name: 'reraId',
            title: 'Rera Id',
            type: 'string',
            description: 'Please enter ReraId',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'projectDescription',
            title: 'Project Description',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField ({
            name: 'brochureLink',
            title: 'Brochure Link',
            type: 'string',
            description: 'Please provide download link for project brochure',
            validation: Rule => Rule.required()
          })
        ]
      }),
      defineField({
        name: 'location',
        title: 'Location',
        type: 'object',
        fields:[
            defineField({
              name: 'shortAddress',
              title: 'Short Address',
              type: 'string',
              description: 'Ex \<LandMark\>, \<City Name\>'
            }),
            ({
                  name: 'address',
                  title: 'Address',
                  type: 'string',
                  validation: Rule => Rule.required()
            }),
            ({
                  name: 'pincode',
                  title: 'Pincode',
                  type: 'number',
                  validation: Rule => Rule.required()
            }),
            ({
                  name: 'link',
                  title: 'Google Maps Link',
                  type: 'url',
                  validation: Rule => Rule.required()
            })
        ],
      }),
      defineField({
        name: 'priceInfo',
        title: 'Pricing Info',
        type: 'object',
        fields: [
          defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Enter Number according to Unit'
          }), 
          defineField({
            name: 'priceUnit',
            title: 'Price Unit',
            type: 'string',
            description: 'Ex. Lakh, Cr'
          })
        ]
      }),
      defineField({
        name: 'developer',
        title: 'Developer',
        type: 'reference',
        description: 'Project Developed By',
        to: [{type: 'developer'}]
      }),
      defineField({
        name: 'imageUrls',
        title: 'Property Images/Photos',
        type: 'array',
        of: [{type: 'image'}],
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'possessionDate',
        title: 'Possession-Date',
        type: 'date',
      }),
      defineField({
        name: 'reraVerified',
        title: 'Rera Verified',
        type: 'boolean',
      }),
      defineField({
        name: 'featuredProject',
        title: 'Featured Project',
        type: 'boolean',
      }),
      defineField({
        name: 'configuration',
        title: 'Configuration',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
              defineField ({
                name: 'rooms',
                title: 'Number of Rooms',
                type: 'number',
                description: 'BHK'
              }),
              defineField ({
                name: 'carpetArea',
                title: 'Carpet Area',
                type: 'number',
                description: 'Carpet Area in SqFt'
              }),
              defineField({
                name:  'configurationType',
                title:  'Type',
                type: 'string',
                description: 'Compact/ Standard/ XL /...'
            }), defineField({
              name:  'configurationPrice',
              title:  'Price',
              type: 'string',
              description: 'Price per config, Eg: 2.13cr'
          })
            ]
        }]
      }),
      defineField({
        name: 'amenities',
        title: 'Amenities',
        type: 'array',
        of: [{type: 'reference', to: {type: 'amenity'}}]
      })
    ],
  
    preview: {
      select: {
        title: 'name',
        developer: 'developer.developerName',
      },
      prepare(selection) {
        const {developer} = selection
        return {...selection, subtitle: developer && `${developer}`}
      },
    },
  })
  